import { productsDetailsElements } from "./products-details.elements";

export class productsDetailsMethods {

    static get clickOnAddToCartButton() {
        productsDetailsElements.buttons.addToCart.click();
    }
}