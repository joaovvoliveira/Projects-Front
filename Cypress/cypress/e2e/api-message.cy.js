describe('Api Adopet', () => {
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODBiYjQyZC0xMjllLTQ1YmItODY1OC04NjFlZGQ2Mjg5NjMiLCJhZG9wdGVyTmFtZSI6IkJydW5uYSBCcnVubmEiLCJpYXQiOjE3MzU2NzA0NTcsImV4cCI6MTczNTkyOTY1N30.-H0X-X-HZ0wtdImRYF2bMMshTFmnMxZaVqT8RHLbdnM`

  it('Mensagens da API', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/mensagem/680bb42d-129e-45bb-8658-861edd628963',
      headers: { authorization }
    }).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body).to.have.property('msg')
    })
  })
})