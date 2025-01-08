describe('API Users', () => {
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTY0M2NkNi03MTEyLTQxNWItOTVkMi0wNzkwNGIwZDFhMWMiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTczNTk0ODE4NSwiZXhwIjoxNzM2MjA3Mzg1fQ.vsMylQnbxOslCdN-eiN-xngwtUkcZOEHMn9ZQi2AxKI`

  it('API User logoff', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c',
      headers: {authorization}
    }).them((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.status).to.have.property('login')
    })
  })
})