import { test as apitest, expect } from "@playwright/test";
import { APIObjectManagers } from "../objectManagers/api-objectmanagers";
import * as fs from "fs";

type ApiFixtures = {
    apiObjects: APIObjectManagers
}

export const test = apitest.extend<ApiFixtures>({
    apiObjects: async ({ playwright }, use) => {
        const auth = JSON.parse(
            fs.readFileSync("playwright/.auth/api-token.json", "utf8")
        );

        console.log("---- FIXTURE LOADED TOKEN ----:", auth.token); // Ikkada token print avuthundo ledo chudu

        const request = await playwright.request.newContext({
            extraHTTPHeaders: {
                "Authorization": `Bearer ${auth.token}`,
                "Content-Type": "application/json"
            }
        });

        await use(new APIObjectManagers(request));

        await request.dispose();
    }
});

export { expect };