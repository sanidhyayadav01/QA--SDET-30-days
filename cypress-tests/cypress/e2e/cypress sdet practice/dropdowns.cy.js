/// <reference types = "cypress"/>

describe("Validating dropdowns", function () {
  it("Validating dropdown using select", function () {
    cy.visit("https://testautomationpractice.blogspot.com");
    cy.get('#country').select('India');
  });
});
