import { test, expect } from "../../fixtures/ui-fixtures";

test.describe("Dashboard Open Test", async () => {
    test("TC01 Dashboard Page Open ", async ({ PageObjects }) => {

        const dashboardpage = PageObjects.getDashboardPage();

        await dashboardpage.openDashboard("/admin");

        await dashboardpage.verifyPageLoaded();

        await expect(dashboardpage.page).toHaveURL(/admin/);


    });
});