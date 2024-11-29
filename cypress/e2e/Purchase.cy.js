describe('E2E Flow: Purchase Product with Login and Cart', () => {
  it ('Login',() => {
    try{
     cy.visit('www.saucedemo.com'); 
 
    //----------------------Login------------------//
    cy.get('[data-test="username"]').should('be.visible') .type('standard_user');  //Entering email
    cy.get('[data-test="password"]').should('be.visible').type('secret_sauce'); //Entering password
    cy.get('[data-test="login-button"]').click(); //Clicking button to login
    cy.wait(4000); // Waits for 4 seconds
 
  //-------------Add To Card--------------//
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.enabled').click();
  cy.wait(2000);
  cy.get('[data-test="shopping-cart-link"]').should('be.visible').click();
  cy.wait(2000);
  cy.get('[data-test="continue-shopping"]').should('be.enabled').click();
  cy.wait(2000);
 
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('be.enabled').click();
  cy.wait(2000);
  cy.get('[data-test="shopping-cart-link"]').should('be.visible').click();
  cy.wait(2000);
  cy.get('[data-test="checkout"]').should('be.visible').click();
  cy.wait(2000);
 
  //---------------Checkout Information-------///
 
  cy.get('[data-test="firstName"]').should('be.visible') .type('Nimra');
  cy.get('[data-test="lastName"]').should('be.visible') .type('Naveed');
  cy.get('[data-test="postalCode"]').should('be.visible') .type('44000');
 
  cy.get('[data-test="continue"]').click();
 
  cy.get('[data-test="finish"]').click();
 
  cy.get('[data-test="back-to-products"]').click();
  
  
 
  }
  
  catch (error) {
  
   cy.log('Purchasing Not Done ', error.message);
 }
 
 })
 })
 