import { commonPageData } from "../pages/commonPage/common-page.data";
import { commonPageMethods } from "../pages/commonPage/common-page.methods";
import { signUpMethods } from "../pages/signup/signup.methods";
import { Logger } from "../util/logger";
import data from "../../fixtures/data.json";

const user = commonPageMethods.generateRandomString(7);
const password = commonPageMethods.generateRandomString(7);
const existuser = data.username;

describe(commonPageData.testSuites.regristro, () => {

    beforeEach(() => {
        Logger.reset();
    });

    it('TC-001 - Registro de usuario Valido', () => {
        Logger.step('Navegando a Demoblaze');
        cy.clearCookies();
        commonPageMethods.navigateToDemoBlaze();

        Logger.step('Haciendo click en "Sign up"');
        commonPageMethods.clickOnSignUpOptions();

        Logger.step('Completando campos con información válida');
        signUpMethods.insertUsername(user);
        signUpMethods.insertPassword(password);

        Logger.step('Registrando el usuario');
        signUpMethods.clickOnsignUpButton();

        Logger.verification('Alerta con mensaje: "Sign up successful"');
        signUpMethods.verifySignUpSuccessfulMessageDisplay();
    });

    it('TC-002 - Registro de usuario inválido', () => {
        Logger.step('Navegando a Demoblaze');
        cy.clearCookies();
        commonPageMethods.navigateToDemoBlaze();

        Logger.step('Haciendo click en "Sign up"');
        commonPageMethods.clickOnSignUpOptions();

        Logger.step('Ingresando usuario ya existente');
        signUpMethods.insertUsername(existuser);
        signUpMethods.insertPassword(password);

        Logger.step('Intentando registrar');
        signUpMethods.clickOnsignUpButton();

        Logger.verification('Alerta con mensaje: "This user already exists"');
        signUpMethods.verifuThatThisUserAlreadyExistMessageDisplay();
    });
});

