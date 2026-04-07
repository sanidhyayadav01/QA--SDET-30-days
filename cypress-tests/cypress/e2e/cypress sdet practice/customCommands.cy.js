/// <reference types = "cypress"/>

describe("Promoting reusability using custom commands", function () {
  it("Learning custom commands", function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.Login('Admin','admin123');
  });
});
