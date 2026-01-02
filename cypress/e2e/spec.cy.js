const { homeData } = require("./pages/Home/home.data");
const { homeMethods } = require("./pages/Home/home.methods");
const { loginMethods } = require("./pages/login/login.methods");

describe('template spec', () => {
  it('passes', () => {

    cy.visit('https://demoblaze.com/')
    homeMethods.clickOnProductLink('Iphone 6 32gb')
  })
})