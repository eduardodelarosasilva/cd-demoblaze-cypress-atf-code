import { thanyouForYourPurchaseElements } from "./thnaks-for-your-purchase.elements";

export class thanyouForYourPurchaseMethods {

    static clickOnOK() {
        thanyouForYourPurchaseElements.buttons.ok.click();
    }
    static verifyGreenMark() {
        thanyouForYourPurchaseElements.icons.greenCheckMark.should('exist');
    }
}