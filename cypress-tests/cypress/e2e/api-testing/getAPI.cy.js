/// <reference types = "cypress"/>

describe("Learning about GET API call", function () {
  it("GET Call", function () {
    cy.request("https://dummy.restapiexample.com/api/v1/employee/1").then(
      (res) => {
        expect(res.body).to.have.property(
          "message",
          "Successfully! Record has been fetched.",
        );
        expect(res.status).to.eql(200);
        expect(res.body).to.deep.equal({
          status: "success",
          data: {
            id: 1,
            employee_name: "Tiger Nixon",
            employee_salary: "320800",
            employee_age: "61",
            profile_image: "",
          },
          message: "Successfully! Record has been fetched.",
        });
      },
    );
  });
});
