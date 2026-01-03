import { commonPageData } from "./common-page.data";
import { commonPageElements } from "./common-page.elements";

export class commonMethods {
    static get navigateToDemoBlaze() {
        cy.visit(commonPageData.url);
    }
    static get clickOnHomeOption() {
        commonPageElements.topMenu.home.click();
    }
    static get clickOnContactOptions() {
        commonPageElements.topMenu.contact.click();
    }
    static get clickOnAboutUs() {
        commonPageElements.topMenu.aboutUs.click();
    }
    static get clickOnLoginOptions() {
        commonPageElements.topMenu.login.click();
    }
    static get clickOnSignUpOptions() {
        commonPageElements.topMenu.signup.click();
    }
    static get clickOnCartOptions() {
        commonPageElements.topMenu.cart.click();
    }
}