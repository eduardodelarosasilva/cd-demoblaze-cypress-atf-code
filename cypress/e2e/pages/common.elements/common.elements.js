export class topMenu {
    static get elements() {
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