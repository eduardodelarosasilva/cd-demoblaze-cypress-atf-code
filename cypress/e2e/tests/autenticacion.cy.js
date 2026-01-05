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



});