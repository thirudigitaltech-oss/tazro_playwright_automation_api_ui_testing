import { Page, Locator } from "@playwright/test";
import { BasePage } from "../../../utils/basepage";

export class DashboardPage extends BasePage {
   

    constructor(page: Page) {
        super(page);
       
       
    }

     async verifyPageLoaded(): Promise<void> {
       
    }

    async openDashboard(url:string): Promise<void> {
        await this.page.goto(url);
    }

   
}
