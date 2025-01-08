import { users } from '../fixtures/users.json'

describe('Registration Page', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })
  users.forEach(users => {
    it('try login with many users', () => {
      cy.get('[data-test="input-name"]').clear().type(users.name);
      cy.get('[data-test="input-email"]').clear().type(users.email);
      cy.get('[data-test="input-password"]').clear().type(users.password);
      cy.get('[data-test="input-confirm-password"]').clear().type(users.password);
      cy.get('[data-test="submit-button"]').click();
      cy.wait(6000);
    })
  })
})