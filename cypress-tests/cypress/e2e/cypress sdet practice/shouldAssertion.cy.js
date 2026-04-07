/// <reference types = "cypress"/>

describe("Validating Implicit Assertions", function(){


    it("Validating should assertion on OrangeHRM", function(){
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/'
    );
    cy.url().should('include','auth/login');
    cy.title().should('eq','OrangeHRM');
    cy.get('.orangehrm-login-branding > img').should('be.visible');
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123');
    cy.get('.oxd-button').click();

    cy.url().should('include','dashboard').and('include','index');
    })
})