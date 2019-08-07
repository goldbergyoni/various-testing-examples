it('When doing smoke testing over all page, should load them all successfully', () => {
    //exemplified using Cypress but can be implemented easily
    //using any E2E suite
    cy.visit('https://mysite.com/home');
    cy.contains('Home');
    cy.contains('https://mysite.com/Login');
    cy.contains('Login');
    cy.contains('https://mysite.com/About');
    cy.contains('About');
})