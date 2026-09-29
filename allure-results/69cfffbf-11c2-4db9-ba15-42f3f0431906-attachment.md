# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\api\productsapitest.spec.ts >> Products api >> TC03 Negative Test - Add Product with Missing Required Fields
- Location: tests\api\productsapitest.spec.ts:155:5

# Error details

```
Error: expect(received).not.toBe(expected) // Object.is equality

Expected: not 200
```

# Test source

```ts
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
  151 |     /* ==============================================================
  152 |        Nagetive Test Senarios  add product using nagative test
  153 |       ========================================================= */
  154 | 
  155 | test("TC03 Negative Test - Add Product with Missing Required Fields", async ({ apiObjects }) => {
  156 |     const negativeProductApi = apiObjects.getProductsApi();
  157 | 
  158 |     const invalidPayload = {
  159 |         name: "", 
  160 |         price: -10, 
  161 |         original_price: 120,
  162 |         cost_price: 90,
  163 |         unit: "1kg",
  164 |         description: "Invalid product test",
  165 |         image: "",
  166 |         stock: -5, 
  167 |         category: "fruits",
  168 |         is_active: true
  169 |     };
  170 | 
  171 |     const response = await negativeProductApi.addProductsApiRequest(invalidPayload);
  172 |     
  173 |     // Server em status code istundo console lo print chestadi chudu anna
  174 |     console.log("ACTUAL SERVER STATUS CODE FOR INVALID DATA:", response.status());
  175 |     const responseBody = await response.json();
  176 |     console.log("SERVER ERROR RESPONSE BODY:", responseBody);
  177 | 
  178 |     // Ikkada server ichina status code ni base chesi expect petteddam
> 179 |     expect(response.status()).not.toBe(200); // 200 raakudadhu ani pettocchu
      |                                   ^ Error: expect(received).not.toBe(expected) // Object.is equality
  180 | });
  181 | 
  182 | 
  183 | 
  184 | });
```