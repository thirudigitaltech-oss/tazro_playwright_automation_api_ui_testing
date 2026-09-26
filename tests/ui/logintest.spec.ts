import { test, expect } from "../../fixtures/ui-fixtures";
import { Logindata } from "../../data/LoginData";

test.describe("Login Test Both Valid and Invalid", async () => {
    test("TC01 Valid Login Test", async ({ PageObjects }) => {

        const loginpage = PageObjects.getLoginPage();

        await loginpage.OpenPage("/admin/login");

        await loginpage.verifyPageLoaded();

        await loginpage.Login(Logindata.username, Logindata.password);
        await expect(loginpage.page).toHaveURL(/admin/);


    });


    test("TC02 invlaid Login Test ", async ({ PageObjects }) => {

        const loginpage = PageObjects.getLoginPage();

        await loginpage.OpenPage("/admin/login");
        await loginpage.verifyPageLoaded();
        await loginpage.Login(Logindata.invalidusername, Logindata.invalidpassword);
        await expect(loginpage.page).toHaveURL(/login/);


    })
})