import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  fullyParallel: true,
  workers: 8,
  timeout: 30000,
  headed: true,

   reporter: [
  ['list'],
  ['html'],
  ['allure-playwright', { resultsDir: 'allure-results' }],
],

  // global Base Url (UI tests)
  use: {
    baseURL: 'https://tarzo-admin.vercel.app',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },

 projects: [
  // UI login
  {
    name: 'setup-ui',
    testMatch: /.*ui\.setup\.ts/,
  },

  // API login (baseURL = api server)
  {
    name: 'setup-api',
    testMatch: /.*api\.setup\.ts/,
    use: { baseURL: 'https://api.grabzomart.in' },
  },

  // UI tests
  {
    name: 'chromium',
    testIgnore: ['**/tests/api/**', '**/*.api.spec.ts'],
    use: {
      ...devices['Desktop Chrome'],
      storageState: 'playwright/.auth/user.json',
    },
    dependencies: ['setup-ui'],
  },

  // API tests
  {
    name: 'api-tests',
    testMatch: ['**/tests/api/**/*.spec.ts', '**/*.api.spec.ts'],
    use: { baseURL: 'https://api.grabzomart.in' },
    dependencies: ['setup-api'],
  },
],
});
