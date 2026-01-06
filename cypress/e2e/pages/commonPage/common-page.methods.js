import { loginMethods } from "../login/login.methods";
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
    static verifySignedUser(username) {
        commonPageElements.signedUser.should('have.text', `Welcome ${username}`)
    }
    static LoginAndNavigateDemoblaseze(username, password) {
        commonPageMethods.navigateToDemoBlaze();
        cy.clearCookies();
        commonPageMethods.clickOnLoginOptions();
        loginMethods.login(username, password);
    }
    static verifyAlert(expectedMessage) {
        cy.on('window:alert', (str) => {
            expect(str).to.equal(expectedMessage)
        })

    }

    static generateRandomString(length) {
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    }
}