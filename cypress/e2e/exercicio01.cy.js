describe('exercicios', () => {
    it('passes', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('.header__message').click();
    })
  })