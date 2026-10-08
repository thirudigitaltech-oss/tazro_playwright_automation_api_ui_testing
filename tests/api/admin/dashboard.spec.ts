import { test } from "../../../fixtures/api-fixtures";
import { DashboardResponseInterfaces } from "../../../interfaces/admin/dashboardinterfaces";
import {DashboardResponseSchema} from "../../../schemas/admin/dashboard.schema";
import {expectSuccess} from "../../../utils/assertions";

test.describe("Dashboard test", async () => {

    test("Dashboard Api Test", async ({ apiObjects }) => {

        const dashboardapi = apiObjects.getDashbordAPI();

        const response = await dashboardapi.getDashboard();
        expectSuccess(response.status())

       const body: DashboardResponseInterfaces = await response.json();
       DashboardResponseSchema.parse(body); 

    })
})
