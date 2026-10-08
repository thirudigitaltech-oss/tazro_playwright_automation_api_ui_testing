import "dotenv/config";
import { defineConfig, devices } from "@playwright/test";
import { devConfig } from "./config/dev.config";

export default defineConfig({

    fullyParallel: true,

    workers: 8,

    timeout: 30000,

    reporter: [
        ["list"],
        ["html"],
        ["allure-playwright", {
            resultsDir: "allure-results"
        }]
    ],

    use: {
        baseURL: devConfig.uiBaseURL,
        headless: !!process.env.CI,
        screenshot: "only-on-failure",
        trace: "retain-on-failure",
        video: "retain-on-failure"
    },

    projects: [

        {
            name: "setup-ui",
            testMatch: /.*ui\.setup\.ts/
        },

        {
            name: "setup-api",
            testMatch: /.*api\.setup\.ts/,
            use: {
                baseURL: devConfig.apiBaseURL
            }
        },

        {
            name: "chromium",
            testIgnore: [
                "**/tests/api/**",
                "**/*.api.spec.ts"
            ],
            use: {
                ...devices["Desktop Chrome"],
                storageState: "playwright/.auth/user.json"
            },
            dependencies: ["setup-ui"]
        },

        {
            name: "api-tests",
            testMatch: [
                "**/tests/api/**/*.spec.ts",
                "**/*.api.spec.ts"
            ],
            use: {
                baseURL: devConfig.apiBaseURL
            },
            dependencies: ["setup-api"]
        }
    ]
});