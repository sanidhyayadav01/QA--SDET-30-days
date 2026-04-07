/// <reference types = "cypress"/>

describe("Learning about POST API call", function () {
  it("POST Call", function () {
    cy.request("POST", "https://dummy.restapiexample.com/api/v1/create", {
      name: "test",
      salary: "123",
      age: "23",
    }).then((res) => {
      expect(res.body).to.have.property(
        "message",
        "Successfully! Record has been added.",
      );
      expect(res.status).eql(200);
    //   expect(res.body).to.deep.equal({
    //     status: "success",
    //     data: {
    //       name: "test",
    //       salary: "123",
    //       age: "23",
    //       id: 5365,
    //     },
    //     message: "Successfully! Record has been added.",
    //   });
    });
  });
});
