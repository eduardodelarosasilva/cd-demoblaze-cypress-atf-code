const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  retries: 1,
  video: false,
  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;


    },
  },
});