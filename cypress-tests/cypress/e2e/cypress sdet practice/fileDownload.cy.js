///<reference types = "cypress"/>

describe('Learning file download', function(){

    it('File download', function(){
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
    })
})