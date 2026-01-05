import { Logger } from "../../util/logger";
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


    static signUp(username, password) {
        Logger.subStep('insert username')
        this.insertUsername(username)
        Logger.subStep('insert password')
        this.insertPassword(password)
        Logger.subStep('click on sign up button')
        this.clickOnsignUpButton()
    };

    static verifySignUpSuccessfulMessageDisplay() {
        commonPageMethods.verifyAlert('Sign up successful.');
    };

}
