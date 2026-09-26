import { expect, test as setup } from "@playwright/test";
import * as fs from "fs";
import { Logindata } from "../data/LoginData";

setup("authenticate API", async ({ request }) => {
  const response = await request.post("/api/admin/login", {
    data: { email: Logindata.username, password: Logindata.password },
  });

  if (!response.ok()) {
    console.log("LOGIN FAILED:", response.url(), response.status(), await response.text());
  }
  expect(response.ok()).toBeTruthy();

const body = await response.json();

console.log("API TOKEN SAVED:", body.token ? "YES" : "NO");

fs.mkdirSync("playwright/.auth", { recursive: true });

fs.writeFileSync(
    "playwright/.auth/api-token.json",
    JSON.stringify({ token: body.token })
);
});