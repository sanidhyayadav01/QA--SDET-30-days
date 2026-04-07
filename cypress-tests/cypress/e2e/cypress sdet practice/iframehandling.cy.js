/// <reference types = "cypress"/>

describe("Handling Iframes", function(){


    it("Validating writing anu text in hmtl area in iframe", function(){
        cy.visit('https://the-internet.herokuapp.com/tinymce');
        // cy.get('#mce_0_ifr').type("Welcome to testing the iframe") 
        // this won't work unless we resolve this iframe, handling iframes is like  resolving them like a promise
        cy.get('#mce_0_ifr').then(function($iframe){
            let iframeBody = $iframe.contents().find('body')
            //after this, we are needed to wrap up the contents of the <body> which are now in the iframeBody 
            // variable inorder to perform any function on them
            cy.wrap(iframeBody)
            .clear()
            .type("Let's handle iframe now")
            .type('{selectall}') //this will select the entire text available in the area under test
            //this did npt work because the site is not allowing write operations (read-only)
        })
    })
})