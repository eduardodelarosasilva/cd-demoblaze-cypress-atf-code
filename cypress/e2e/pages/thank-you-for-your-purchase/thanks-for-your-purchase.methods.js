import { thanyouForYourPurchaseElements } from "./thnaks-for-your-purchase.elements";



export class thankyouForYourPurchaseMethods {

    static clickOnOK() {
        thanyouForYourPurchaseElements.buttons.ok.click();


    }
    static verifyGreenMark() {
        thanyouForYourPurchaseElements.icons.greenCheckMark.should('be.visible', { timeout: 50000 });
    }

}