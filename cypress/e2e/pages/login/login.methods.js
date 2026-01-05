import { Logger } from "../../util/logger";
import { loginElements } from "./login.elements";
import { commonPageMethods } from "../commonPage/common-page.methods";


export class loginMethods {

    static insertUsername(username) {
        loginElements.textBoxes.username.invoke('val', username);
    }
    static insertPassword(password) {
        loginElements.textBoxes.password.invoke('val', password);
    }
    static clickOnLoginButton() {
        loginElements.buttons.login.click();
    }
    static clickOnMainLogin() {
        topMenu.elements.loginIn.click();
    }
    static login(username, password) {
        Logger.subStep('insert username')
        // this.clickOnMainLogin()
        this.insertUsername(username)
        Logger.subStep('insert password')
        this.insertPassword(password)
        Logger.subStep('click on login button')
        this.clickOnLoginButton()
    }
    static navigateToDemoblazeAndOpenLogin() {
        commonPageMethods.navigateToDemoBlaze();
        cy.clearCookies();
        commonPageMethods.clickOnLoginOptions();

    }
    static verifyWrongPasswordMessage() {
        commonPageMethods.verifyAlert('Wrong password.');
    }
};
