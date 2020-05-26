

it("When premium user, Then price should be 90%", async () => {
    //Arrange
    cy.visit('https://mystore.biz/price-calculator');

    //Act
    cy.contains('[data-catalog-price-box]').type('100');
    cy.contains('[data-is-premium-user]').type('Yes');
    cy.contains('[data-submit-button]').click();

    //Assert
    cy.get('[data-result-box]')
        .should('have.value', '90')
});

async function startDB() {

}

async function startAPI() {

}