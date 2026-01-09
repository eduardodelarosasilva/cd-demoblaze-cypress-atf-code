export class thanyouForYourPurchaseElements {
    static get buttons() {
        return {
            get ok() {
                return cy.get('button[class="confirm btn btn-lg btn-primary"]');
            },
        }
    }
    static get icons() {
        return {
            get greenCheckMark() {
                return cy.contains('Thank you for your purchase!');
            },
        }
    }

}