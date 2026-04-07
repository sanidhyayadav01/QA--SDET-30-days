///<reference types = "cypress"/>

describe('Handling multiple tabs', function(){


    it('Handling tabs', function(){
        cy.visit('https://workspace.google.com/gmail/');
        // what we want is that if we are opening multiple tabs then they should stay 
        // within our cypress test area or window so as to test more on them too
        // this can be achieved by making use of the invoke method to remove the target (target:blank) attribute
        // which usually makes the page to open in new tab
        cy.get(':nth-child(1) > .TemplateFooter_footer__nav__link').invoke('removeAttr','target').click();
    })
})