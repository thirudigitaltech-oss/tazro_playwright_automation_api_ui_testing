import { APIResponse } from "@playwright/test";

export async function logApiResponse(response: APIResponse) {
    console.log("========== API ERROR ==========");
    console.log("URL:", response.url());
    console.log("Status:", response.status());
    console.log("Response:", await response.text());
    console.log("================================");
}