import { commonPageData } from "../pages/commonPage/common-page.data";
import { Logger } from "../util/logger";
import { loginData } from "../pages/login/login.data";
import { commonPageMethods } from "../pages/commonPage/common-page.methods";
import { homeMethods } from "../pages/Home/home.methods";

describe(commonPageData.testSuites.catalogoYCompras, () => {
    let username = loginData.validCredentials.username;
    let password = loginData.validCredentials.password;

    before(() => {
    });
    beforeEach(() => {
        Logger.step('PRE-CONDICIÓN: Iniciar sesión y preparar entorno');
        commonPageMethods.LoginAndNavigateDemoblaseze(username, password);
    });
    Logger.reset();

    it('TC05 Navegación por categoria Monitores', () => {

        Logger.step('Navegar a la página de inicio')
        commonPageMethods.clickOnHomeOption()

        Logger.step('Seleccionar una categoría de productos en el menú de navegación')
        homeMethods.clickOnMonitorsOptions()

        Logger.verification('Verificar que se muestra la lista de productos correspondiente a la categoría seleccionada')
        homeMethods.verifyProductDisplay('Apple monitor 24')
        homeMethods.verifyProductDisplay('ASUS Full HD')
    });


    it('TC06 Navegación por categoria Phones', () => {

        Logger.step('Navegar a la página de inicio')
        commonPageMethods.clickOnHomeOption()

        Logger.subStep('Seleccionar una categoría de productos en el menú de navegación')
        homeMethods.clickOnPhonesOptions()

        Logger.verification('Verificar que se muestra la lista de productos correspondiente a la categoría seleccionada')
        homeMethods.verifyProductDisplay('Samsung galaxy s6')
        homeMethods.verifyProductDisplay('Nokia lumia 1520')
        homeMethods.verifyProductDisplay('Nexus 6')
        homeMethods.verifyProductDisplay('Samsung galaxy s7')
        homeMethods.verifyProductDisplay('Iphone 6 32gb')
        homeMethods.verifyProductDisplay('Sony xperia z5')
        homeMethods.verifyProductDisplay('HTC One M9')
    });

});