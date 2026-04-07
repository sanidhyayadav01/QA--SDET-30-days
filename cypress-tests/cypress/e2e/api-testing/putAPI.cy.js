/// <reference types = "cypress"/>

describe("Learning about PUT API call", function () {
  it("PUT Call", function () {
    cy.request("PUT", "https://dummy.restapiexample.com/api/v1/update/21", {
      name: "test",
      salary: "123",
      age: "23",
    }).then((res) => {
      expect(res.body).to.have.property(
        "message",
        "Successfully! Record has been updated.",
      );
      expect(res.status).eql(200);
    });
  });
});
