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

    static generateRandomString(length = 10) {

        var result = '';
        var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1
        }
        return result;
    }
}