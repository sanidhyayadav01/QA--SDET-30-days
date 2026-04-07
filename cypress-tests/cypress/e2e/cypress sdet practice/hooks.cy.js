/// <reference types = "cypress"/>

describe("Using hooks", () => {
  beforeEach(function () {
    //before each test i want the user to be logged in
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123');
    cy.get('.oxd-button').click();
    //cy.url().should("include", "Dashboard");
  });

  it("navigate to leave section", function () {
    cy.get(':nth-child(3) > .oxd-main-menu-item').click();
  });

  it("navigate to performance section", function () {
    cy.get(':nth-child(7) > .oxd-main-menu-item').click();
  });

  afterEach(function () {
    cy.get('body').then(($body) => {
      if ($body.find('.oxd-userdropdown-tab').length) {
        cy.get('.oxd-userdropdown-tab').click();
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
      }
    })
  });
});
