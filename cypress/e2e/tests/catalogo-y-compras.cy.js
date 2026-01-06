import { commonPageData } from "../pages/commonPage/common-page.data";
import { loginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";
import { loginData } from "../pages/login/login.data";
import { commonPageMethods } from "../pages/commonPage/common-page.methods";
import { homeMethods } from "../pages/Home/home.methods";

describe(commonPageData.testSuites.catalogoYCompras, () => {
    let username;
    let password;
    before(() => {
    });
    beforeEach(() => {
        Logger.reset();
    });

    it('TC05 Navegación por categoria Monitores', () => {
        username = loginData.validCredentials.username;
        password = loginData.validCredentials.password;

        Logger.step('Iniciar sesión como usuario registrado')
        Logger.subStep('Acceder a demoblaze y abrir login')
        commonPageMethods.LoginAndNavigateDemoblaseze()
        Logger.subStep('Insertando credenciales existentes y validas')
        loginMethods.login(username, password);

        Logger.step('Navegar a la página de inicio')
        commonPageMethods.clickOnHomeOption()

        Logger.step('Seleccionar una categoría de productos en el menú de navegación')
        homeMethods.clickOnMonitorsOptions()
        Logger.verification('Verificar que se muestra la lista de productos correspondiente a la categoría seleccionada')
        homeMethods.verifyProductDisplay('Apple monitor 24')
        homeMethods.verifyProductDisplay('ASUS Full HD')
    });

    it('TC06 Navegación por categoria Phones', () => {

        Logger.step('Acceder a demoblaze e ir a Home')
        commonPageMethods.navigateToDemoBlaze()
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