import { cartMethods } from "./pages/cart/cart.methods"
import { loginMethods } from "./pages/login/login.methods"


describe('pruebas', () => {
  it('get rid of product', () => {

    cy.visit('https://www.demoblaze.com/index.html');
    cy.wait(11000);
    cartMethods.clickOnDeleteLink('Nokia lumia 1520');



  });
});