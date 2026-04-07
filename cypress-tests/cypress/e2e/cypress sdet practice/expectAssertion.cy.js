/// <reference types = "cypress"/>

describe("Validating data using explicit assertions", function(){


    it("Using expect assertion", function(){
    // cy.visit(
    //   'https://www.google.com/'
    // );
    let pageName = "OrangeHRM";
    expect(pageName).to.be.equal('OrangeHRM');
    expect(pageName).to.have.length.of.at.most(9);


    //Validating object
    let person = {
        firstName:"Sanidhya",
        lastName:"Yadav"
    }

    expect(person).to.deep.equal({
        firstName:"Sanidhya",
        lastName:"Yadav"
    });

    expect(person).to.have.property('firstName','Sanidhya');

    //validating array
    let heroes = ['Superman','Batman','Spiderman'];
    expect(heroes).to.have.ordered.members(['Superman','Batman','Spiderman']);
    expect(heroes).to.include('Spiderman')
    expect(heroes).to.include.members(['Superman','Spiderman'])



    });
})