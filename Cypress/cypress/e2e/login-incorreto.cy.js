describe('Pagina de Login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="login-button"]').click();
    cy.intercept('POST','https://adopet-api-i8qu.onrender.com/adotante/login',{
      statusCode:400, }).as('stubPost')
  })

  it('Verifica mensagem de falha no Login', () => {
    cy.get('[data-test="submit-button"]').click();
    cy.contains('É necessário informar um endereço de email').should('be.visible')
    cy.contains('Insira sua senha').should('be.visible')
  })

  it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
    cy.login('Brunnaaahasdsa@gmail.com','2580Bru')
    cy.wait('@stubPost')
    cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
  })
})

/*
Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”;
Visite a página de principal do AdoPet e teste os botões header;
Visite a página de /login do Adopet;
Visite a página de /home do Adopet;
Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.


    cy.get('input[name="nome"]').type('Brunna Brunna');
    cy.get('input[name="email"]').type('Brunnaaahasdsa@gmail.com');
    cy.get('input[name="password"]').type('2580Bru');
    cy.get('input[name="confirm_password"]').type('2580Bru');
    
    cy.contains('button','Cadastrar').click();

    cy.get('input[name="email"]').type('Brunna81aahasdsa@gmail.com');
    cy.get('input[name="password"]').type('2580Bru');

    cy.contains('button','Entrar').click();
    
*/