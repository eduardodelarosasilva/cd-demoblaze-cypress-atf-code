const { loginMethods } = require("./pages/login/login.methods");

describe('template spec', () => {
  it('passes', () => {
    const user = 'xrandom';
    const password = 'xrandom'
    cy.visit('https://demoblaze.com/index.html')
    cy.get('a[data-target="#logInModal"]').click();
    loginMethods.login(user, password)
    cy.get('a#nameofuser').should('contain.text', user)

  })
})