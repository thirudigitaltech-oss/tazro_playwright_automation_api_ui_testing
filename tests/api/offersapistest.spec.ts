import { test, expect } from "../../fixtures/api-fixtures";
import { OffersListResponseInterfaces } from "../../interfaces/adminInterfaces/offersinterfaces";

test.describe("Offers APIs Testing", () => {

    test("TC01 - Verify Offers List API response and data types", async ({ apiObjects }) => {
        const offers = apiObjects.getOffersApis();

        // 1. Send Request
        const response = await offers.offerApiRequest();

        // 2. Validate HTTP Status Code
        expect(response.status()).toBe(200);

        // 3. Parse JSON Body
        const offersBody: OffersListResponseInterfaces[] = await response.json();

        // Response validation (assuming array response or single object)
        const firstOffer = Array.isArray(offersBody) ? offersBody[0] : offersBody;

        // 4. Assertions (Presence Checks)
        expect(firstOffer).toBeDefined();
        expect(firstOffer.id).toBeDefined();

        // 5. Assertions (Data Type Checks)
        expect(typeof firstOffer.id).toBe("number");
        expect(typeof firstOffer.title).toBe("string");
        expect(typeof firstOffer.code).toBe("string");
        expect(typeof firstOffer.discount_type).toBe("string");
        expect(typeof firstOffer.discount_value).toBe("number");
        expect(typeof firstOffer.is_active).toBe("boolean");

        console.log(offersBody);
    });

});