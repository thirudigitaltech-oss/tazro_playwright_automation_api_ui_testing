# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\api\productsapitest.spec.ts >> Products api >> TC01 Prodcts Api Test
- Location: tests\api\productsapitest.spec.ts:11:9

# Error details

```
Error: expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 0
Received:    -10
```

# Test source

```ts
  1   | import { test, expect } from "../../fixtures/api-fixtures";
  2   | import { ProductResponseInterfaces, AddProductResponse, EditResponse, DeleteResponseInterface } from "../../interfaces/adminInterfaces/productsapiinterfaces";
  3   | import { getaddProductsPayloads } from "../../payloads/adminpayloads/addproductpayloads";
  4   | import { geteditProductsPayloads } from "../../payloads/adminpayloads/addproductpayloads";
  5   | 
  6   | 
  7   | 
  8   | 
  9   | test.describe("Products api", async () => {
  10  | 
  11  |     test("TC01 Prodcts Api Test", async ({ apiObjects }) => {
  12  | 
  13  |         const productsapi = apiObjects.getProductsApi();
  14  | 
  15  |         const response = await productsapi.productsapiRequest();
  16  | 
  17  |         expect((response as any).status()).toBe(200);
  18  | 
  19  |         const products: ProductResponseInterfaces[] = await response.json();
  20  | 
  21  |         expect(Array.isArray(products)).toBeTruthy();
  22  |         expect(products.length).toBeGreaterThan(0);
  23  | 
  24  |         for (const product of products) {
  25  |             expect(typeof product.id).toBe("number");
  26  | 
  27  |             // Helper functions for nullable fields
  28  |             const isNumberOrNull = (val: any) => typeof val === "number" || val === null;
  29  |             const isStringOrNull = (val: any) => typeof val === "string" || val === null;
  30  | 
  31  |             // 1. Price fields
  32  |             expect(isNumberOrNull(product.price)).toBeTruthy();
  33  |             expect(isNumberOrNull(product.original_price)).toBeTruthy();
  34  |             expect(isNumberOrNull(product.cost_price)).toBeTruthy();
  35  | 
  36  |             // 2. String fields (Now allowing null in case description/image/unit is empty)
  37  |             expect(isStringOrNull(product.unit)).toBeTruthy();
  38  |             expect(isStringOrNull(product.description)).toBeTruthy();
  39  |             expect(isStringOrNull(product.image)).toBeTruthy();
  40  | 
  41  |             // 3. Stock & Boolean
  42  |             expect(product.stock).not.toBeNull();
  43  |             expect(typeof product.stock).toBe("number");
  44  | 
  45  |             expect(isStringOrNull(product.category)).toBeTruthy();
  46  |             expect(typeof product.is_active).toBe("boolean");
  47  | 
  48  |             // 4. Value Logic Validations
  49  |             if (product.price !== null) {
> 50  |                 expect(product.price).toBeGreaterThanOrEqual(0);
      |                                       ^ Error: expect(received).toBeGreaterThanOrEqual(expected)
  51  |             }
  52  |             expect(product.stock).toBeGreaterThanOrEqual(0);
  53  |         }
  54  |     });
  55  | 
  56  | 
  57  |     /*============================================
  58  |       ADD Product Test
  59  |       ==============================================*/
  60  | 
  61  |     test("TC02 ADD & Delete Products test", async ({ apiObjects }) => {
  62  |         const productApi = apiObjects.getProductsApi();
  63  | 
  64  |         const addproduct = {
  65  |             name: "FinaApple",
  66  |             price: 90,
  67  |             original_price: 120,
  68  |             cost_price: 90,
  69  |             unit: "1kg",
  70  |             description: "best vitmins c avialble",
  71  |             image: "https://pngimg.com/uploads/pineapple/small/pineapple_PNG95135.png",
  72  |             stock: 20,
  73  |             category: "fruites",
  74  |             is_active: true
  75  | 
  76  |         }
  77  | 
  78  |         const payloads = getaddProductsPayloads(
  79  |             addproduct.name,
  80  |             addproduct.price,
  81  |             addproduct.original_price,
  82  |             addproduct.cost_price,
  83  |             addproduct.unit,
  84  |             addproduct.description,
  85  |             addproduct.image,
  86  |             addproduct.stock,
  87  |             addproduct.category,
  88  |             addproduct.is_active,
  89  |         );
  90  | 
  91  |         const addResponse = await productApi.addProductsApiRequest(payloads);
  92  |         expect((addResponse as any).status()).toBe(200);
  93  | 
  94  |         const addBody: AddProductResponse = await (addResponse as any).json();
  95  |         const generated_id = addBody.id;
  96  |         console.log(`Product created successfully with ID: ${generated_id}`);
  97  | 
  98  | 
  99  |         /*=======================================================
  100 |            Edit Product using server Product Generated Id 
  101 |           ==========================================================*/
  102 | 
  103 |         const editproducts = {
  104 |             "name": "Fineapple",
  105 |             "price": "110",
  106 |             "original_price": "150",
  107 |             "unit": "1kg",
  108 |             "description": "Best Season Fruits",
  109 |             "image": "https://pngimg.com/uploads/pineapple/small/pineapple_PNG95135.png",
  110 |             "stock": 20,
  111 |             "category": "Fruits",
  112 |             "is_active": true,
  113 |         }
  114 | 
  115 |         const editpayloads = geteditProductsPayloads(
  116 |             editproducts.name, editproducts.price,
  117 |             editproducts.original_price, editproducts.unit,
  118 |             editproducts.description, editproducts.image,
  119 |             editproducts.stock, editproducts.category, editproducts.is_active
  120 |         );
  121 | 
  122 | 
  123 | 
  124 |         const editResponse = await productApi.editProductapiRequest(generated_id, editpayloads);
  125 |         expect(editResponse.status()).toBe(200);
  126 | 
  127 |         const Body: EditResponse = await editResponse.json();
  128 | 
  129 |         expect(Body.message).toBeDefined();
  130 |         expect(typeof Body.message).toBe("string");
  131 |         console.log(`Product with ID: ${generated_id} edited successfully!`);
  132 | 
  133 | 
  134 | 
  135 | 
  136 |         /*=======================================================
  137 |          Delte Product using server Product Generated Id 
  138 |         ==========================================================*/
  139 | 
  140 |         const deleteResponse = await productApi.deleteProductRequest(generated_id);
  141 |         expect(deleteResponse.status()).toBe(200);
  142 | 
  143 |         const deleteBody: DeleteResponseInterface = await deleteResponse.json();
  144 |         expect(deleteBody.message).toBeDefined();
  145 |         expect(typeof deleteBody.message).toBe("string");
  146 | 
  147 |         console.log(`Product with ID: ${generated_id} deleted successfully!`);
  148 |     });
  149 | 
  150 | 
```