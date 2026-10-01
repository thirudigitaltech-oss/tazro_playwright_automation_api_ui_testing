# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\api\orderapistest.spec.ts >> Orders API testing >> TC01 Order List API Test
- Location: tests\api\orderapistest.spec.ts:6:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "string"
Received: "object"
```

# Test source

```ts
  1  | import { test, expect } from "../../fixtures/api-fixtures";
  2  | import { OrderResponse } from "../../interfaces/adminInterfaces/orderinterfaces";
  3  | 
  4  | test.describe("Orders API testing", () => {
  5  | 
  6  |     test("TC01 Order List API Test", async ({ apiObjects }) => {
  7  |         const orders = apiObjects.getOrdersApi();     
  8  |             
  9  |         const response = await orders.orderslistAiRequest(); 
  10 |       
  11 |         expect(response.status()).toBe(200);
  12 | 
  13 |         
  14 |         const body: OrderResponse[] = await response.json();
  15 |         expect(Array.isArray(body)).toBe(true);
  16 |         console.log(`Total orders: ${body.length}`);
  17 | 
  18 |         for (const order of body) {
  19 |             expect(typeof order.id).toBe("number");
  20 |             expect(typeof order.status).toBe("string");
  21 |             expect(typeof order.total).toBe("number");
  22 |             expect(typeof order.address).toBe("string");
  23 |             expect(typeof order.created_at).toBe("string");
  24 |             expect(Array.isArray(order.items)).toBe(true);
  25 | 
  26 |             // user object
  27 |             expect(order.user).not.toBeNull();
  28 |             expect(typeof order.user!.id).toBe("number");
> 29 |             expect(typeof order.user!.name).toBe("string");
     |                                             ^ Error: expect(received).toBe(expected) // Object.is equality
  30 |             expect(typeof order.user!.phone).toBe("string");
  31 | 
  32 |             // worker: assign avvakapote null, kabatti check chesi validate
  33 |             if (order.worker) {
  34 |                 expect(typeof order.worker.id).toBe("number");
  35 |                 expect(typeof order.worker.name).toBe("string");
  36 |                 expect(typeof order.worker.phone).toBe("string");
  37 |             }
  38 |         }
  39 |     });
  40 | 
  41 | });
```