export class singUpElements {
    static get textBoxes() {
        return {
            get username() {
                return cy.get('input#sign-username')
            },
            get password() {
                return cy.get('input#sign-password')
            },

        };
    }
    static get button() {
        return cy.contains('button', 'Sign up')
    }

    static get topMenu() {
        return {
            get signUp() {
                return cy.get('a[data-target="#signInModal"]')
            }
        }
    }
}

