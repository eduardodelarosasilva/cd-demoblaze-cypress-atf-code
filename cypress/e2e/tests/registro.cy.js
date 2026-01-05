import { commonPageData } from "../pages/commonPage/common-page.data";
import { commonPageMethods } from "../pages/commonPage/common-page.methods";
import { signUpMethods } from "../pages/signup/signup.methods";
import { Logger } from "../util/logger";
import data from "../../fixtures/data.json";


describe(commonPageData.testSuites.regristro, () => {
    const existuser = data.username;
    let user;
    let password;

    beforeEach(() => {
        Logger.reset();
        user = commonPageMethods.generateRandomString(8);
        password = commonPageMethods.generateRandomString(10);
    });

    it('TC-001 - Ingresando datos de registro válidos', () => {
        Logger.step('Navegando a Demoblaze y haciendo click en "Sign up');
        signUpMethods.navigateAndSignUpPrepare();

        Logger.step('Intentando registrar usuario duplicado');
        signUpMethods.insertUsername(user);
        signUpMethods.insertPassword(password);

        Logger.step('Registrando el usuario');
        signUpMethods.clickOnsignUpButton();

        Logger.verification('Alerta con mensaje: "Sign up successful"');
        signUpMethods.verifySignUpSuccessfulMessageDisplay();
    });

    it('TC-002 - Registro de usuario inválido', () => {
        Logger.step('Navegando a Demoblaze y haciendo click en "Sign up');
        signUpMethods.navigateAndSignUpPrepare();

        Logger.step('Ingresando usuario ya existente');
        signUpMethods.insertUsername(existuser);
        signUpMethods.insertPassword(password);

        Logger.step('Intentando registrar');
        signUpMethods.clickOnsignUpButton();

        Logger.verification('Alerta con mensaje: "This user already exists"');
        signUpMethods.verifuThatThisUserAlreadyExistMessageDisplay();
    });
});

