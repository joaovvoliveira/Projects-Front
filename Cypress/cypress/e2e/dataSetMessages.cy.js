import { messages } from '../fixtures/messages.json'

describe('chamando json mensagens', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
    cy.login('ana@email.com','Senha123');
    cy.contains('a','Falar com responsável').click();
  });

  messages.forEach(messages => {
    it('Send a Message', () => {
      cy.get('#name').clear().type(messages.person_name);
      cy.get('#phone').clear().type(messages.phone);
      cy.get('#petName').clear().type(messages.pet_name);
      cy.get('#msg').clear().type(messages.message);
      cy.get('[data-test="submit-button"]').click();
      cy.wait(5000);
    })
    
  });
})