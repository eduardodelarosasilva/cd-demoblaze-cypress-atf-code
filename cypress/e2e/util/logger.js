export class Logger {
    static currentStep = 0;

    // Método privado (lógica compartida, # es solo para este block, )
    static #send(prefix, description) {
        const text = `**${prefix} - ${description}**`;
        cy.log(text);
        if (Cypress.Allure) {
            cy.allure().step(text);
        }
    }
    static step(description) {
        this.currentStep++;
        this.#send(`Step #${this.currentStep}`, description);
    }
    static verification(description) {
        this.#send(`Verification`, description);
    }
    static subStep(description) {
        this.#send(`SubStep`, description);
    }
    static reset() {
        this.currentStep = 0;
    }
}
// export class Logger {
//     static stepNumber(number) {
//         const text = `**Step # ${number}**`
//         cy.log(text)
//         cy.allure().step(text)
//     }
//     static step(description) {
//         const text = `**step - ${description}**`
//         cy.log(text)
//         cy.allure().step(text)
//     }
//     static verification(description) {
//         const text = `**verification - ${description}**`
//         cy.log(text)
//         cy.allure().step(text)
//     }
//     static subStep(description) {
//         const text = `**subStep ${description}**`
//         cy.log(text)
//         cy.allure().step(text)
//     }
//     static subverification(description) {
//         const text = `**Substep - ${description}**`
//         cy.log(text)
//         cy.allure().step(text)
//     }
// }