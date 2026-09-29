# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: setup\auth.api.setup.ts >> authenticate API
- Location: setup\auth.api.setup.ts:5:6

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import { expect, test as setup } from "@playwright/test";
  2  | import * as fs from "fs";
  3  | import { Logindata } from "../data/LoginData";
  4  | 
  5  | setup("authenticate API", async ({ request }) => {
  6  |   const response = await request.post("/api/admin/login", {
  7  |     data: { email: Logindata.username, password: Logindata.password },
  8  |   });
  9  | 
  10 |   if (!response.ok()) {
  11 |     console.log("LOGIN FAILED:", response.url(), response.status(), await response.text());
  12 |   }
> 13 |   expect(response.ok()).toBeTruthy();
     |                         ^ Error: expect(received).toBeTruthy()
  14 | 
  15 | const body = await response.json();
  16 | 
  17 | console.log("API TOKEN SAVED:", body.token ? "YES" : "NO");
  18 | 
  19 | fs.mkdirSync("playwright/.auth", { recursive: true });
  20 | 
  21 | fs.writeFileSync(
  22 |     "playwright/.auth/api-token.json",
  23 |     JSON.stringify({ token: body.token })
  24 | );
  25 | });
```