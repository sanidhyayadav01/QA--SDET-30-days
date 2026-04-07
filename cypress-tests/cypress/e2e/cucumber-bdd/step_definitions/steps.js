import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../support/pageObjects/login";

const loginPage = new LoginPage();

Given("I am on the OrangeHRM login page", () => {
  loginPage.visit();
});

When(
  "I login with username {string} and password {string}",
  (usernameKey, passwordKey) => {
    // cy.allure().step(`Entering credentials: ${usernameKey} / ${passwordKey}`);

    // Correct async usage of cy.env with Cypress.env()
    cy.wrap(null).then(() => {
      const username = Cypress.env(usernameKey); // from cypress.env.json
      const password = Cypress.env(passwordKey);
      loginPage.enterUsername(username);
      loginPage.enterPassword(password);
    });
  }
);

When("I click on login", () => {
  loginPage.login();
});

Then("I should see {string}", (result) => {
  loginPage.verifyDashboard();
});