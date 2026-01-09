import { commonPageData } from "../pages/commonPage/common-page.data";
import { loginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";
import { loginData } from "../pages/login/login.data";
import { commonPageMethods } from "../pages/commonPage/common-page.methods";

describe(commonPageData.testSuites.autenticacion, () => {
    let storedUser
    let storedPassword
    let wrongPassword

    before(() => {
        storedUser = loginData.validCredentials.username;
        storedPassword = loginData.validCredentials.password;
        wrongPassword = loginData.invalidCredentials.password;
    });

    beforeEach(() => {
        Logger.reset();
        commonPageMethods.logout();
    });


    it('TC-003 Inicio de secion Valida', () => {

        Logger.step('Navegando a Demoblaze y haciendo click en Login')
        loginMethods.navigateToDemoblazeAndOpenLogin();

        Logger.step('completando los campos de Login con credenciales Validas')
        loginMethods.insertUsername(storedUser)
        loginMethods.insertPassword(storedPassword)

        Logger.step('Iniciando seción exitosamente')
        loginMethods.clickOnLoginButton();
        Logger.verification('Verificar que nos redirigimos a la pagina de inicio')
        commonPageMethods.verifySignedUser(storedUser);
    });

    it('TC-004 Inicio de secion Invalida', () => {

        Logger.step('Navegando a Demoblaze y haciendo click en Login')
        loginMethods.navigateToDemoblazeAndOpenLogin();

        Logger.subStep('completando los campos de Login con password invalido y username correcto')
        loginMethods.insertUsername(storedUser)
        loginMethods.insertPassword(wrongPassword)

        Logger.subStep('Intentamos iniciar seción')
        loginMethods.clickOnLoginButton();
        Logger.verification('verificar que la alerta muestra un mensaje de error: Wrong password.')
        loginMethods.verifyWrongPasswordMessage();

    });

});