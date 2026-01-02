export class productsDetailsElements {
    static get buttons() {
        return {
            get addToCart() {
                return cy.contains('a', 'Add to cart');
            }
        }
    }

}