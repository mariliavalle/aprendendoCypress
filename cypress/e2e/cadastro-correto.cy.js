describe('Página de Cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadstrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Lucas');
    cy.get('[data-test="input-email"]').type('lucas@email.com');
    cy.get('[data-test="input-password"]').type('Teste123');
    cy.get('[data-test="input-confirm-password"]').type('Teste123');
    cy.get('[data-test="submit-button"]').click();
  })
})