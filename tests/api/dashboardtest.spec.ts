import { test, expect } from "../../fixtures/api-fixtures";
import { DashboardResponseInterfaces } from "../../interfaces/adminInterfaces/dashboardinterfaces";

test.describe("Dashboard test", async () => {

    test("Dashboard Api Test", async ({ apiObjects }) => {

        const dashboardapi = apiObjects.getDashbordAPI();

        const response = await dashboardapi.getDashboard();
        expect(response.status()).toBe(200);

       const body: DashboardResponseInterfaces = await response.json();

       
        const values = Object.values(body);

        for (const value of values) {
            expect(value).toBeDefined();
            expect(typeof value).toBe("number");
            expect(value).toBeGreaterThanOrEqual(0);
        }

    })
})
