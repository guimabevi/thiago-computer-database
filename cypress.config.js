const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://computer-database.gatling.io/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
