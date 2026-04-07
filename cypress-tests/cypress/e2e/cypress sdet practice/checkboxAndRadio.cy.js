/// <reference types = "cypress"/>

describe("Validating checkboxes and radio buttons", function () {
    
    
    beforeEach(function(){
    cy.visit("https://testautomationpractice.blogspot.com");
    })

  it("Validating checkboxes using check/uncheck", function () {
    //checking/unchecking individual element
    cy.get('#sunday').check();
    cy.get('#sunday').uncheck();
    //checking/unchecking all
    cy.get('input[type="checkbox"]').check();
    cy.get('input[type="checkbox"]').uncheck();
  });

  it('Validating radio buttons', function(){
    cy.get('input[type="radio"]').first().check();
  });
});
