import { commonPageMethods } from "../commonPage/common-page.methods";
import { productsDetailsElements } from "./products-details.elements";

export class productsDetailsMethods {

    static clickOnAddToCartButton() {
        productsDetailsElements.buttons.addToCart.click();
    }
    static verifyProductDetails() {
        productsDetailsElements.buttons.addToCart.should('be.visible')
    }
    static verifyProductAddedMessage() {
        commonPageMethods.verifyAlert('Product added.')

    }

}