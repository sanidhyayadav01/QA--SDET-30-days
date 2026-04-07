/// <reference types = "cypress"/>

describe("Learning about Intercepting/Spying/Mocking an API call", function () {
  it("intercept Call", function (){
    cy.visit('https://dummyapi.io/explorer')

    cy.intercept({
      path: '/data/v1/tag/water/post?limit=10',
    }).as('posts');
    cy.get('.flex > :nth-child(7)').click();
    cy.wait('@posts').then((interceptResponse)=>{
      expect(interceptResponse.response.body.limit).eq(10);
    })


  });

  it("Mock API Call", function (){
    cy.visit('https://dummyapi.io/explorer')

    cy.intercept('GET','/data/v1/tag/water/post?limit=10',{limit:20, Name:"Sanidhya Yadav"}).as('posts')
    cy.get('.flex > :nth-child(7)').click();
    cy.wait('@posts').then((interceptResponse)=>{
      expect(interceptResponse.response.body.limit).eq(20);
      expect(interceptResponse.response.body.Name).eq('Sanidhya Yadav');
    })

  });

    it.only("Data - Driven Mock API Call using intercept", function (){
    cy.visit('https://dummyapi.io/explorer')

    cy.intercept('GET','/data/v1/tag/water/post?limit=10',{fixture:'example.json'}).as('posts')
    cy.get('.flex > :nth-child(7)').click();
    cy.wait('@posts').then((interceptResponse)=>{
      expect(interceptResponse.response.body.username).eq('Admin');
      expect(interceptResponse.response.body.password).eq('admin123');
    })

  });
});
