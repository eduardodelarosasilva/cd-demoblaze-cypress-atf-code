import { commonPageData } from "./common-page.data";
import { commonPageElements } from "./common-page.elements";

export class commonPageMethods {

    static navigateToDemoBlaze() {
        cy.visit(commonPageData.url)
    }
    static clickOnHomeOption() {
        commonPageElements.topMenu.home.click();
    }
    static clickOnContactOptions() {
        commonPageElements.topMenu.contact.click();
    }
    static clickOnAboutUs() {
        commonPageElements.topMenu.aboutUs.click();
    }
    static clickOnLoginOptions() {
        commonPageElements.topMenu.login.click();
    }
    static clickOnSignUpOptions() {
        commonPageElements.topMenu.signup.click();
    }
    static clickOnCartOptions() {
        commonPageElements.topMenu.cart.click();
    }
    static verifyAlert(expectedMessage) {
        cy.on('window:alert', (str) => {
            expect(str).to.equal(expectedMessage)

        });
    };
};