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

    static generateRandomString(length) {
        // Definimos el set de caracteres permitidos (solo letras y números)
        // Evitamos caracteres especiales que puedan dar problemas en URLs o alertas
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';

        for (let i = 0; i < length; i++) {
            // Elegimos un índice al azar del set de caracteres
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }

        return result;
    }
}