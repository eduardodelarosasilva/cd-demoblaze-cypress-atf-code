import { placeOrderElements } from "./palce-order.elements"

export class placeOrderMethods {

    static insertName(name) {
        placeOrderElements.textBoxes.Name.invoke('val', name)
    }
    static insertCountry(country) {
        placeOrderElements.country.incoke('val', country)
    }
    static insertCity(city) {
        placeOrderElements.textBoxes.city.invoke('val', city)
    }
    static insertCreditCard(creditcardNumber) {
        placeOrderElements.textBoxes.creditCard.invoke('val', creditcardNumber)
    }
    static insertMonth(month) {
        placeOrderElements.textBoxes.month.invoke('val', month)
    }
    static insertYear(year) {
        placeOrderElements.textBoxes.year.invoke('val', year)
    }

    static ClickOnCloseButton() {
        placeOrderElements.buttons.close.click();
    }
    static clickOnPurchaseButton() {
        placeOrderElements.buttons.purchase.click();
    }
}
