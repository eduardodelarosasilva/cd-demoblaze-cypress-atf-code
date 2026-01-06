import { homeElements } from "./home.elements";


export class homeMethods {

    static clickOnPhonesOptions() {
        homeElements.categoriesMenu.phones.click();
    }
    static clickOnLaptopsOptions() {
        homeElements.categoriesMenu.laptops.click();
    }
    static clickOnMonitorsOptions() {
        homeElements.categoriesMenu.monitors.click();
    }
    static clickOnProductLink(productName) {
        homeElements.product(productName).click();

    }
    static verifyProductDisplay(productName) {
        homeElements.product(productName).should('be.visible');
    }
}