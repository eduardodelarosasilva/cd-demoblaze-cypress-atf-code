export class Logger {
    static stepNumber(number) {
        const text = `Step # ${number}`
        cy.log(text)
        cy.allure().step(text)
    }
    static step(description) {
        const text = `step - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }
    static verification(description) {
        const text = `verification - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }
    static subStep(description) {
        const text = `subStep ${description}`
        cy.log(text)
        cy.allure().step(text)
    }
    static subverification(description) {
        const text = `Substep - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }
}