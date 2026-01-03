import { commonElements } from "./common.elements"

export class commonMethods {
    static get elements() {
        return {
            get clickOnCart() {
                commonElements.topMenu.cart.click();
            }
        }
    }
}