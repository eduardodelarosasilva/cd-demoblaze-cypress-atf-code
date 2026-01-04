import { cartMethods } from "./pages/cart/cart.methods"  //esto es ES6 moduoles, siguen la practica de tree shaking, donde solo se importa lo que se usa, 
import { loginMethods } from "./pages/login/login.methods"
import { Logger } from "./util/logger";


describe('pruebas', () => {
  it('get rid of product', () => {
    const usuario = "random123";
    const contraseña = "random123"

    Logger.stepNumber(1)
    Logger.step('navegar a Demobalze page')
    cy.visit('https://www.demoblaze.com/index.html');

    Logger.stepNumber(2)
    Logger.step('click on login button')
    cy.get('a[data-target="#logInModal"]').click();
    // cartMethods.clickOnDeleteLink('Nokia lumia 1520');

    Logger.stepNumber(3)
    Logger.step(`Login with this credentials: "${usuario}/${contraseña}"`)
    loginMethods.login(usuario, contraseña)
    Logger.verification(`The home page should show "Welcome ${usuario}"text"`)
    Logger.step('verificatcion- you have logged in successfully')
    cy.get('a#nameofuser').should('contain.text', usuario)

  });
});