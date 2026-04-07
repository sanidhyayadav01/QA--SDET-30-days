///<reference types = "cypress"/>

describe('Learning file upload', function(){

    it('File Upload', function(){
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('[name="file"]').attachFile('Screenshot (17).png');
        cy.get('#file-submit').click();
        cy.get('#uploaded-files').contains('Screenshot (17)')
    })
})