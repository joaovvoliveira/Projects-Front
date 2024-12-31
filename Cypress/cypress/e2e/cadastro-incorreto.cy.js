describe('Pagina de cadastro tentando logar sem informacoes', () => {
  it('Deve preencher os campos de incorretamente para um novo usuario', () => {
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="submit-button"]').click();
    cy.contains('É necessário informar um endereço de email').should('be.visible')
    cy.contains('Crie uma senha').should('be.visible')
    cy.contains('Repita a senha criada acima').should('be.visible')

    cy.wait(4000);

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