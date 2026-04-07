/// <reference types = "cypress"/>

describe("Learning about DELETE API call", function () {
  it("DELETE Call", function () {
    cy.request("DELETE", "https://dummy.restapiexample.com/api/v1/delete/2").then((res)=>{
        expect(res.status).to.equal(200);
    })
})
});
