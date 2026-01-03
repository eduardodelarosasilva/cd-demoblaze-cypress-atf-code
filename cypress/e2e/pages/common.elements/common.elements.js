export class commonElements {
    static get topMenu() {
        return {
            get home() {
                return cy.get('li.active a')
            },
            get cart() {
                return cy.get('a#cartur')
            },
            get loginIn() {
                return cy.get('a#cartur')
            },
            get signUp() {
                return cy.get('a[data-target="#signInModal"]')
            }
        }
    }
} 