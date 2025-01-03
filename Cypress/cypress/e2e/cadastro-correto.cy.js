describe('Pagina de Cadastro', () => {
  it('Deve preencher os campos de cadastro para um novo usuario', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    
    cy.contains('a','Cadastrar').click();

    cy.cadastro('Brunna Brunna','Brunnaaahasdsa@gmail.com','2580Bru')
    cy.contains('button','Cadastrar').click();

  })
})

/*
Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”;
Visite a página de principal do AdoPet e teste os botões header;
Visite a página de /login do Adopet;
Visite a página de /home do Adopet;
Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.

    cy.get('input[name="email"]').type('Brunna81aahasdsa@gmail.com');
    cy.get('input[name="password"]').type('2580Bru');

    cy.contains('button','Entrar').click();
    
*/