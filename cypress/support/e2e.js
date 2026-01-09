import './commands'
import '@shelex/cypress-allure-plugin';

Cypress.on('uncaught:exception', (err, runnable) => {
    // Usamos una lista de errores conocidos de DemoBlaze para limpiar el ruido
    const erroresIgnorables = [
        'showcart is not defined',
        'Modal is transitioning'
    ];

    const esErrorConocido = erroresIgnorables.some(msg => err.message.includes(msg));

    if (esErrorConocido) {
        return false;
    }

    // Si es un error nuevo/distinto, Cypress sí debe fallar el test
});