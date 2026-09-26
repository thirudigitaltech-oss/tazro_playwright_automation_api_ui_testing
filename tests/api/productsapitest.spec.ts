import { test, expect } from "../../fixtures/api-fixtures";
import { ProductResponseInterfaces, AddProductResponse, EditResponse, DeleteResponseInterface } from "../../interfaces/adminInterfaces/productsapiinterfaces";
import { getaddProductsPayloads } from "../../payloads/adminpayloads/addproductpayloads";
import { geteditProductsPayloads } from "../../payloads/adminpayloads/addproductpayloads";




test.describe("Products api", async () => {

    test("TC01 Prodcts Api Test", async ({ apiObjects }) => {

        const productsapi = apiObjects.getProductsApi();

        const response = await productsapi.productsapiRequest();

        expect((response as any).status()).toBe(200);

        const products: ProductResponseInterfaces[] = await response.json();

        expect(Array.isArray(products)).toBeTruthy();
        expect(products.length).toBeGreaterThan(0);

        for (const product of products) {
            expect(typeof product.id).toBe("number");

            // Helper functions for nullable fields
            const isNumberOrNull = (val: any) => typeof val === "number" || val === null;
            const isStringOrNull = (val: any) => typeof val === "string" || val === null;

            // 1. Price fields
            expect(isNumberOrNull(product.price)).toBeTruthy();
            expect(isNumberOrNull(product.original_price)).toBeTruthy();
            expect(isNumberOrNull(product.cost_price)).toBeTruthy();

            // 2. String fields (Now allowing null in case description/image/unit is empty)
            expect(isStringOrNull(product.unit)).toBeTruthy();
            expect(isStringOrNull(product.description)).toBeTruthy();
            expect(isStringOrNull(product.image)).toBeTruthy();

            // 3. Stock & Boolean
            expect(product.stock).not.toBeNull();
            expect(typeof product.stock).toBe("number");

            expect(isStringOrNull(product.category)).toBeTruthy();
            expect(typeof product.is_active).toBe("boolean");

            // 4. Value Logic Validations
            if (product.price !== null) {
                expect(product.price).toBeGreaterThanOrEqual(0);
            }
            expect(product.stock).toBeGreaterThanOrEqual(0);
        }
    });


    /*============================================
      ADD Product Test
      ==============================================*/

    test("TC02 ADD & Delete Products test", async ({ apiObjects }) => {
        const productApi = apiObjects.getProductsApi();

        const addproduct = {
            name: "FinaApple",
            price: 90,
            original_price: 120,
            cost_price: 90,
            unit: "1kg",
            description: "best vitmins c avialble",
            image: "https://pngimg.com/uploads/pineapple/small/pineapple_PNG95135.png",
            stock: 20,
            category: "fruites",
            is_active: true

        }

        const payloads = getaddProductsPayloads(
            addproduct.name,
            addproduct.price,
            addproduct.original_price,
            addproduct.cost_price,
            addproduct.unit,
            addproduct.description,
            addproduct.image,
            addproduct.stock,
            addproduct.category,
            addproduct.is_active,
        );

        const addResponse = await productApi.addProductsApiRequest(payloads);
        expect((addResponse as any).status()).toBe(200);

        const addBody: AddProductResponse = await (addResponse as any).json();
        const generated_id = addBody.id;
        console.log(`Product created successfully with ID: ${generated_id}`);


        /*=======================================================
           Delte Product using server Product Generated Id 
          ==========================================================*/

        const editproducts = {
            "name": "Fineapple",
            "price": "110",
            "original_price": "150",
            "unit": "1kg",
            "description": "Best Season Fruits",
            "image": "https://pngimg.com/uploads/pineapple/small/pineapple_PNG95135.png",
            "stock": 20,
            "category": "Fruits",
            "is_active": true,
        }

        const editpayloads = geteditProductsPayloads(
            editproducts.name, editproducts.price,
            editproducts.original_price, editproducts.unit,
            editproducts.description, editproducts.image,
            editproducts.stock, editproducts.category, editproducts.is_active
        );



        const editResponse = await productApi.editProductapiRequest(generated_id, editpayloads);
        expect(editResponse.status()).toBe(200);

        const Body: EditResponse = await editResponse.json();

        expect(Body.message).toBeDefined();
        expect(typeof Body.message).toBe("string");
        console.log(`Product with ID: ${generated_id} edited successfully!`);




        /*=======================================================
         Delte Product using server Product Generated Id 
        ==========================================================*/

        const deleteResponse = await productApi.deleteProductRequest(generated_id);
        expect(deleteResponse.status()).toBe(200);

        const deleteBody: DeleteResponseInterface = await deleteResponse.json();
        expect(deleteBody.message).toBeDefined();
        expect(typeof deleteBody.message).toBe("string");

        console.log(`Product with ID: ${generated_id} deleted successfully!`);
    });





});