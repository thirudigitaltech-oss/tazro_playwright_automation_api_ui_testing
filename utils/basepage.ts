import { Page, Locator } from "@playwright/test";

export abstract class BasePage {
    readonly page: Page;


    constructor(page: Page) {
        this.page = page;

    }


    // Abstrcat Class VerifyPage Loaded , this method has no body just only declare  method name only 
    abstract verifyPageLoaded(): Promise<void>;


    async waitForElement(element: Locator): Promise<void> {
        await element.waitFor({ state: "visible" });
    }


    //Open Page Url 
    async OpenUrl(url: string) {
        await this.page.goto(url);
    }

    //Click wraper Method to Click All Click Actons
    async clickAction(element: Locator): Promise<void> {
        await element.waitFor({ state: "visible" });
        await element.click();
    }


    //Fill Wraper  fill Text in Input Filed 
    async inputText(element: Locator, text: string): Promise<void> {
        await element.waitFor({ state: "visible" });
        await element.fill(text);
    }
}