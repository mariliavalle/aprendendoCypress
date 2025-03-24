describe('Página de Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })
  
  it('Deve preencher os campos do formulário corretamente para cadstrar um novo usuário', () => {
    cy.get('[data-test="input-name"]').type('Lucas');
    cy.get('[data-test="input-email"]').type('lucas@email.com');
    cy.get('[data-test="input-password"]').type('Teste123');
    cy.get('[data-test="input-confirm-password"]').type('Teste123');
    cy.get('[data-test="submit-button"]').click();
  })
})