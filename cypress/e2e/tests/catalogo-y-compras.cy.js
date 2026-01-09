import { commonPageData } from "../pages/commonPage/common-page.data";
import { Logger } from "../util/logger";
import { loginData } from "../pages/login/login.data";
import { commonPageMethods } from "../pages/commonPage/common-page.methods";
import { homeMethods } from "../pages/Home/home.methods";
import { productsDetailsMethods } from "../pages/product-details/products-detaills.methods";
import { cartMethods } from "../pages/cart/cart.methods";
import { placeOrderData } from "../pages/place-order/place-order.data";
import { placeOrderMethods } from "../pages/place-order/place-order.methods";
import { thankyouForYourPurchaseMethods } from "../pages/thank-you-for-your-purchase/thanks-for-your-purchase.methods";

describe(commonPageData.testSuites.catalogoYCompras, () => {
    let username = loginData.validCredentials.username;
    let password = loginData.validCredentials.password;
    let product = 'MacBook Pro';

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

    it('TC07 Agregar producto al carrito', () => {

        Logger.step('Navegar a la página de inicio')
        commonPageMethods.clickOnHomeOption()

        Logger.step('Seleccionar una categoría de productos en el menú de navegación')
        homeMethods.clickOnLaptopsOptions()

        Logger.step('Hacer clic en un producto específico')
        homeMethods.clickOnProductLink(product)

        Logger.verification('Verificar que se muestra add to cart en la página de detalles del producto')
        productsDetailsMethods.verifyProductDetails()

        Logger.subStep('Hacer clic en el botón "Add to cart".')
        productsDetailsMethods.clickOnAddToCartButton()

        Logger.verification('Verificar que se muestra un mensaje de confirmación y el producto se agrega alcarrito.')
        productsDetailsMethods.verifyProductAddedMessage();
        Logger.subStep('navegando a cart ')
        commonPageMethods.clickOnCartOptions()
        Logger.verification('El producto se encuentra en el carrito')
        cartMethods.verifyProductAdded(product)

    });

    it('TC08- Realizar una compra', () => {

        Logger.step('Navegar a la página de inicio')
        commonPageMethods.clickOnHomeOption()

        Logger.step('Seleccionar una categoría de productos en el menú de navegación')
        homeMethods.clickOnLaptopsOptions()

        Logger.step('Hacer clic en un producto específico')
        homeMethods.clickOnProductLink(product)

        Logger.verification('Verificar que se muestra add to cart en la página de detalles del producto')
        productsDetailsMethods.verifyProductDetails()

        Logger.subStep('Hacer clic en el botón "Add to cart".')
        productsDetailsMethods.clickOnAddToCartButton()

        Logger.verification('Verificar que se muestra un mensaje de confirmación y el producto se agrega alcarrito.')
        productsDetailsMethods.verifyProductAddedMessage();
        Logger.step('navegando a cart ')
        commonPageMethods.clickOnCartOptions()
        Logger.verification('El producto se encuentra en el carrito')
        cartMethods.verifyProductAdded(product)

        Logger.step('Hacer clic en la opcion "Cart" en la barra de navegación')
        commonPageMethods.clickOnCartOptions()

        Logger.verification('Verificar que se muestra la página del carrito de compras.')
        cartMethods.verifyCartPageIsShown();

        Logger.step('Hacer clic en el botón "Place Order"')
        cartMethods.clickOnPlaceOrderButton();

        Logger.step('Completar los campos obligatorios en la página de información de envío.')
        placeOrderMethods.setupPurchaseIntercept(); // intercepatos antes de llenar el formualrio
        placeOrderMethods.insertOrderInformation(placeOrderData.testData);
        placeOrderMethods.clickOnPurchaseButton();
        placeOrderMethods.waitForPurchaseResponse();


        thankyouForYourPurchaseMethods.clickOnOK();

        homeMethods.verifyHomePageIsShown();




    });



});