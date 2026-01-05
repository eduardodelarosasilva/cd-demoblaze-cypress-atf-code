import { commonPageMethods } from "../commonPage/common-page.methods";
import { singUpElements } from "./signup.elements";

export class signUpMethods {

    static insertUsername(username) {
        singUpElements.textBoxes.username.invoke('val', username)
    }
    static insertPassword(password) {
        singUpElements.textBoxes.password.invoke('val', password)
    }
    static clickOnsignUpButton() {
        singUpElements.buttons.signUp.click();
    }
    static verifySignUpSuccessfulMessageDisplay() {
        commonPageMethods.verifyAlert('Sign up successful.');
    }
    static verifuThatThisUserAlreadyExistMessageDisplay() {
        commonPageMethods.verifyAlert('This user already exist.');
    }
    static openSignUpOptions() {
        commonPageMethods.clickOnSignUpOptions()
    }

    static navigateAndSignUpPrepare(username, password) {
        commonPageMethods.navigateToDemoBlaze();
        cy.clearCookies();
        this.openSignUpOptions();
    }

}
