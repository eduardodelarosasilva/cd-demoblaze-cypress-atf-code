const { homeData } = require("./pages/Home/home.data");
const { homeMethods } = require("./pages/Home/home.methods");
const { loginMethods } = require("./pages/login/login.methods");
import data from "../fixtures/data.json"
import { signUpMethods } from "./pages/signup/signup.methods";



describe('template spec', () => {
  it('passes', () => {

    cy.visit('https://demoblaze.com/')

    homeMethods.clickOnProductLink(homeData.phone.Iphone632gb)
  })
})