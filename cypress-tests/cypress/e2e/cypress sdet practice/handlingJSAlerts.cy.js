/// <reference types = "cypress"/>

describe("Handling JS Alerts", function(){


    it("Handling a basic JS Alert", function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get(':nth-child(1) > button').click();
        cy.on('window:alert', (alertText)=>{
            expect(alertText).to.contain('I am a JS Alert');
        })
        })


    it("Handling a Confirm JS Alert", function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get(':nth-child(2) > button').click();
        cy.on('window:confirm',(acceptConfirmation)=>{
            expect(acceptConfirmation).to.contain('I am a JS Confirm')
        })

        })


    it("Handling a Prompt JS Alert", function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        //since there no direct thing to handle and verify a prompt alert, so we will have to use stubbing here
        cy.window().then(function(promptAlert){
            cy.stub(promptAlert,"prompt").returns("this came by stubbing this prompt alert");
            cy.get(':nth-child(3) > button').click();
            cy.get('#result').contains('this came by stubbing this prompt alert');
        })

        })
    });