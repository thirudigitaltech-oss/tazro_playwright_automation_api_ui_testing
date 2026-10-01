# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\ui\dashboardtest.spec.ts >> Dashboard Open Test >> TC01 Dashboard Page Open 
- Location: tests\ui\dashboardtest.spec.ts:4:9

# Error details

```
Error: page.goto: net::ERR_ABORTED at https://tarzo-admin.vercel.app/admin
Call log:
  - navigating to "https://tarzo-admin.vercel.app/admin", waiting until "load"

```

# Test source

```ts
  1  | import { Page, Locator } from "@playwright/test";
  2  | import { BasePage } from "../../../utils/basepage";
  3  | 
  4  | export class DashboardPage extends BasePage {
  5  |    
  6  | 
  7  |     constructor(page: Page) {
  8  |         super(page);
  9  |        
  10 |        
  11 |     }
  12 | 
  13 |      async verifyPageLoaded(): Promise<void> {
  14 |        
  15 |     }
  16 | 
  17 |     async openDashboard(url:string): Promise<void> {
> 18 |         await this.page.goto(url);
     |                         ^ Error: page.goto: net::ERR_ABORTED at https://tarzo-admin.vercel.app/admin
  19 |     }
  20 | 
  21 |    
  22 | }
  23 | 
```