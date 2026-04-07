const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

// Cucumber + esbuild
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({

  //allowCypressEnv: false,
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 6000,

    // 👇 IMPORTANT: look for feature files
    specPattern: [
  "cypress/e2e/**/*.feature",
  // "cypress/e2e/**/*.cy.js"
  ],

  env: {
      stepDefinitions: "cypress/e2e/cucumber-bdd/step_definitions/**/*.js",
      allure: true,
      allureResultsPath: "allure-results"
    },

    async setupNodeEvents(on, config) {
      on("task", { downloadFile });

      // Adding Cucumber plugin
      await addCucumberPreprocessorPlugin(on, config);

      // Adding bundler
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      allureWriter(on, config);

      return config;
    },
  },
});