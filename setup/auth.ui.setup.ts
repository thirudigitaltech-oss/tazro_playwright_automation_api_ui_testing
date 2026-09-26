import { expect, test as setup } from "@playwright/test";
import { Logindata } from "../data/LoginData";
import { LoginPage } from "../pages-apis/ui/adminpages/loginpage";

const authFile = "playwright/.auth/user.json";

setup("authenticate UI", async ({ page }) => {
  const loginpage = new LoginPage(page);
  await loginpage.OpenPage("");

  await page.getByPlaceholder("admin@example.com").locator("visible=true").first().fill(Logindata.username);
  await page.getByPlaceholder("••••••••••").locator("visible=true").first().fill(Logindata.password);
  await page.getByRole("button", { name: "Sign In" }).locator("visible=true").first().click();

  await expect(page).toHaveURL(/admin/);
  await page.context().storageState({ path: authFile });
});