import { placeOrderElements } from "./palce-order.elements"

export class placeOrderMethods {

    static insertName(name) {
        placeOrderElements.textBoxes.Name.invoke('val', name)
    }
    static insertCountry(country) {
        placeOrderElements.textBoxes.country.invoke('val', country)
    }
    static insertCity(city) {
        placeOrderElements.textBoxes.city.invoke('val', city)
    }
    static insertcreditCard(creditCard) {
        placeOrderElements.textBoxes.creditCard.invoke('val', creditCard)
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

    static setupPurchaseIntercept() {
        return cy.intercept('POST', 'https://api.demoblaze.com/deletecart').as('purchaseApi');
    }
    static waitForPurchaseResponse() {
        return cy.wait('@purchaseApi').then((interception) => {
            expect(interception.response.statusCode).to.eq(200);
            console.log(interception.request.body);
        })
    };

    static insertOrderInformation(data) {
        this.insertName(data.name)
        this.insertCountry(data.country)
        this.insertCity(data.city)
        this.insertcreditCard(data.creditCard)
        this.insertMonth(data.month)
        this.insertYear(data.year)
    }
};
