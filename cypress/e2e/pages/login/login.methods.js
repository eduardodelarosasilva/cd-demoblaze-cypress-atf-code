import { topMenu } from "../common.elements/common.elements";
import { loginElements } from "./login.elements";


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
        this.clickOnMainLogin()
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnLoginButton()
    }
};
