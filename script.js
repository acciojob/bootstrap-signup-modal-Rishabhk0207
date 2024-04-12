//your JS code here. If required.
// Assuming you have the correct selector now (.btn-close)
cy.get('#signupModal').should('be.visible'); // Check if the modal is visible
cy.get('.btn-close').click();               // Attempt to close the modal
cy.get('#signupModal').should('not.be.visible'); // Assert the modal is not visible


cy.get('.btn-close').click();
cy.wait(500); // wait for 500ms
cy.get('#signupModal').should('not.be.visible');
