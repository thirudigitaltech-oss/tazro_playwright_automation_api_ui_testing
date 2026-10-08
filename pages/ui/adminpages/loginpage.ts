import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "../../../pages/base/base-page";

export class LoginPage extends BasePage {


    private readonly inputuserenamelocator: Locator;
    private readonly inputpasswordlocator: Locator;
    private readonly loginbuttonlocator: Locator;
    


    constructor(page: Page) {
        super(page);

        this.inputuserenamelocator = page.getByPlaceholder("admin@example.com").first();
        this.inputpasswordlocator = page.getByPlaceholder("••••••••••");
        this.loginbuttonlocator = page.getByRole('button', { name: "Sign In" });

    }


    async verifyPageLoaded(): Promise<void> {
        await expect(this.inputuserenamelocator).toBeVisible();
    }


    async OpenPage(url: string): Promise<void> {
        await this.OpenUrl(url);

    }

    async Login(username: string, password: string): Promise<void> {
        await this.inputText(this.inputuserenamelocator, username);
        await this.inputText(this.inputpasswordlocator, password);
        await this.clickAction(this.loginbuttonlocator);
    }
}