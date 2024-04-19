describe('Modal close functionality', () => {
  it('should close the modal when the close button is clicked', () => {
    // First, open the modal
    cy.visit('your-page-url');
    cy.get('button[data-bs-toggle="modal"]').click();  // Adjust if your button selector differs
    cy.get('#signupModal').should('be.visible');  // Checks if the modal is open

    // Now, attempt to close it
    cy.get('.btn-close').click();  // Use the correct class here
    cy.get('#signupModal').should('not.be.visible');  // Checks if the modal is closed
  });
});
