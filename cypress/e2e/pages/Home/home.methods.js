import { commonElements } from "../common.elements/common.elements";
import { homeElements } from "./home.elements";


export class homeMethods {

    static clickOnPhonesOptions() {
        homeElements.categoriesMenu.phones.click();
    }
    static cickOnLaptopsOptions() {
        homeElements.categoriesMenu.laptops.click();
    }
    static clickOnMonitorsOptions() {
        homeElements.categoriesMenu.monitors.click();
    }
    static clickOnProductLink(productName) {
        homeElements.product(productName).click();

    }
    static goHome() {
        commonElements.topMenu.home.click();
    }
}