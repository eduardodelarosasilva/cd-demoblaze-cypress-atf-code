import { topMenu } from "../common.elements/common.elements";
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
    static clickOnMainSignup() {
        topMenu.elements.signUp.click();
    }

    static signUp(username, password) {
        this.clickOnMainSignup()
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnsignUpButton();
    }

}
