import { commonPageData } from "../pages/commonPage/common-page.data";
import { commonPageMethods } from "../pages/commonPage/common-page.methods";
import { signUpMethods } from "../pages/signup/signup.methods";
import { Logger } from "../util/logger";
import data from "../../fixtures/data.json";

const user = commonPageMethods.generateRandomString(7);
const password = commonPageMethods.generateRandomString(7);
const existuser = (data.username)

describe(commonPageData.testSuites.regristro, () => {

    it('TC-001 - Registro de ususario Valido', () => {
        Logger.stepNumber(1)
        Logger.step('Navegando a Demoblaze')
        cy.clearCookies();
        commonPageMethods.navigateToDemoBlaze()

        Logger.stepNumber(2);
        Logger.step('Haciendo click en "Sign up" en la barra de navegación');
        commonPageMethods.clickOnSignUpOptions();

        Logger.stepNumber(3);
        Logger.step('Completando todos los campos obligatorios con información válida.');
        signUpMethods.insertUsername(user)
        signUpMethods.insertPassword(password)

        Logger.stepNumber(4)
        Logger.step('Hacemos clic en "Sign up" para registrar el usuario.');
        signUpMethods.clickOnsignUpButton();
        Logger.verification('Verificar aparicion de alerta con el mensaje: "Sign up successful');
        signUpMethods.verifySignUpSuccessfulMessageDisplay();
    });

    it('TC-002 -Registro de usuario inválido', () => {
        Logger.stepNumber(1)
        Logger.step('Navegando a Demoblaze')
        cy.clearCookies();
        commonPageMethods.navigateToDemoBlaze()

        Logger.stepNumber(2);
        Logger.step('Haciendo click en "Sign up" en la barra de navegación');
        commonPageMethods.clickOnSignUpOptions();

        Logger.stepNumber(3);
        Logger.step('Completando todos los campos obligatorios con información inválida.');
        signUpMethods.insertUsername(existuser)
        signUpMethods.insertPassword(password)

        Logger.stepNumber(4)
        Logger.step('Hacemos clic en "Sign up" para registrar el usuario.');
        signUpMethods.clickOnsignUpButton();
        Logger.verification('Verificar aparicion de alerta con el mensaje: "This user already exist.');
        signUpMethods.verifuThatThisUserAlreadyExistMessageDisplay();
    });

});