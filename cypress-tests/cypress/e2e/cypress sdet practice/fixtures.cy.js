///<reference types = "cypress"/>

describe('Learning fixture usage in data driven testing', function(){

    before(function(){
        cy.fixture('example.json').then(function(creds){
            this.creds = creds;
        })
    })
    it('learning fixtures', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type(this.creds.username);
        cy.get('[name="password"]').type(this.creds.password);
        cy.get('.oxd-button').click();
    })
})