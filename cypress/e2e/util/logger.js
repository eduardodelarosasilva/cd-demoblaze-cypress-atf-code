export class Logger {
    static stepNumber(number) {
        const text = `**Step # ${number}**`
        cy.log(text)
        cy.allure().step(text)
    }
    static step(description) {
        const text = `**step - ${description}**`
        cy.log(text)
        cy.allure().step(text)
    }
    static verification(description) {
        const text = `**verification - ${description}**`
        cy.log(text)
        cy.allure().step(text)
    }
    static subStep(description) {
        const text = `**subStep ${description}**`
        cy.log(text)
        cy.allure().step(text)
    }
    static subverification(description) {
        const text = `**Substep - ${description}**`
        cy.log(text)
        cy.allure().step(text)
    }
}



// export class Logger {
//     // 1. Creamos el contador interno (Estado)
//     static currentStep = 0;

//     static autoStep(description) {
//         this.currentStep++; // Incrementamos automáticamente
//         const text = `Step # ${this.currentStep} - ${description}`;    //con esto los pasos son automaticos(autocounter)
        
//         // Neuro-tip: Usamos colores en consola para resaltar el éxito
//         cy.log(`✅ **${text}**`); 
//         cy.allure().step(text);
//     }

//     static resetCount() {
//         this.currentStep = 0; // Para reiniciar entre tests
//     }
// }
// export class Logger {
//     // Definimos una propiedad estática para llevar la cuenta
//     static currentStep = 0;

//     static step(description) {
//         this.currentStep++; // 'this' aquí se refiere a la clase Logger
        
//         // Neuro-Ventas: Lenguaje inclusivo y persuasivo + Emoji
//         const text = `🚀 Paso # ${this.currentStep} - ¡Genial! Ahora estás: ${description}`;
        
//         cy.log(text);
        
//         // Escudo de seguridad para Allure
//         if (typeof cy.allure === 'function') {
//             cy.allure().step(text);
//         }
//     }

//     // Método para reiniciar el contador si empiezas un test nuevo
//     static reset() {
//         this.currentStep = 0;
//     }
// }



// static sendToAllure(text) {
//         // Verificamos si Allure existe antes de llamarlo   //aqui separamos la logica, para que el codigo no dependa de allure
//         if (Cypress.Allure) { 
//             cy.allure().step(text);
//         }
//     } Si Allure se rompe o se quita del project todos los cy.allure().step() lanzarán error y los tests no correrán.