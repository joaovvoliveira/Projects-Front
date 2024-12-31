describe('Pagina de Login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })

  it('Deve preencher os campos de incorretamente para um novo usuario', () => {
    cy.get('[data-test="input-loginEmail"]').type('afgeavaev@');
    cy.get('[data-test="input-loginPassword"]').type('2580');
    cy.get('[data-test="submit-button"]').click();
    cy.contains('Por favor, verifique o email digitado').should('be.visible')
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
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