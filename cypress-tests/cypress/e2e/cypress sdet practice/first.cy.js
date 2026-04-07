/// <reference types = "cypress" />

describe("First login test", function(){


    it("Validate login to OrangeHRM", function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('[name="username"]').type("Admin")
        cy.get('[name="password"]').type("admin123")
        cy.get('.oxd-button').click()

        //after login, we are accessing the leave section
        cy.get(':nth-child(3) > .oxd-main-menu-item').click()
        // cy.get('.oxd-topbar-body-nav > ul').contains('apply', {matchCase:false}).click()
        //cy.get('.oxd-topbar-body-nav > ul').contains(/^M\w+/).click()
        // here (/^M\w+/) is a simple regex which checks for a word starting with 'M'
        cy.get('.oxd-topbar-body-nav > ul').find('li a').contains('Apply').click();

    })
})