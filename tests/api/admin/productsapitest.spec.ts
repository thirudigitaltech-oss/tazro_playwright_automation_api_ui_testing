import { test, expect } from "../../../fixtures/api-fixtures";
import { ProductResponseInterfaces, AddProductResponse, EditResponse, DeleteResponseInterface } from "../../../interfaces/admin/productsapiinterfaces";
import { getaddProductsPayloads, geteditProductsPayloads } from "../../../payloads/adminpayloads/addproductpayloads";
import { expectSuccess } from "../../../utils/assertions";
import {  AddProductResponseSchema, EditResponseSchema, DeleteProductResponseSchema , ProductsListResponseSchema} from "../../../schemas/admin/products.schema";
import { addproduct, invalidPayload } from "../../../testdata/admintestdata/products/addproducts";
import { EditProduct } from "../../../testdata/admintestdata/products/editproduct";

test.describe("Products api", async () => {

    test("TC01 Prodcts Api Test", async ({ apiObjects }) => {

        const productsapi = apiObjects.getProductsApi();

        const response = await productsapi.productsapiRequest();

        expectSuccess((response as any).status());

        const products: ProductResponseInterfaces[] = await response.json();

        ProductsListResponseSchema.parse(products);


    });
});


/*============================================
  ADD Product Test
  ==============================================*/

test("TC02 ADD & Delete Products test", async ({ apiObjects }) => {
    const productApi = apiObjects.getProductsApi()

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
    expectSuccess((addResponse as any).status())

    const addBody: AddProductResponse = await (addResponse as any).json();
    const generated_id = addBody.id;

    AddProductResponseSchema.parse(addBody);

    console.log(`Product created successfully with ID: ${generated_id}`);


    /*=======================================================
       Edit Product using server Product Generated Id 
      ==========================================================*/

    const editpayloads = geteditProductsPayloads(
        EditProduct.name,
        EditProduct.price,
        EditProduct.original_price,
        EditProduct.unit,
        EditProduct.description,
        EditProduct.image,
        EditProduct.stock,
        EditProduct.category,
        EditProduct.is_active
    );



    const editResponse = await productApi.editProductapiRequest(generated_id, editpayloads);
    expectSuccess(editResponse.status());

    const editBody: EditResponse = await editResponse.json();
    EditResponseSchema.parse(editBody)


    console.log(`Product with ID: ${generated_id} edited successfully!`);


    /*=======================================================
     Delte Product using server Product Generated Id 
    ==========================================================*/

    const deleteResponse = await productApi.deleteProductRequest(generated_id);
    expectSuccess(deleteResponse.status());

    const deleteBody: DeleteResponseInterface = await deleteResponse.json();
    DeleteProductResponseSchema.parse(deleteBody)

    console.log(`Product with ID: ${generated_id} deleted successfully!`);
});


/* ==============================================================
   Nagetive Test Senarios  add product using nagative test
  ========================================================= */

test("TC03 Negative Test - Add Product with Missing Required Fields", async ({ apiObjects }) => {
    const nagativeproductApi = apiObjects.getProductsApi();


    const response = await nagativeproductApi.addProductsApiRequest(invalidPayload);

    // Server 400 (Bad Request) or 422 (Unprocessable Entity)
    expect([400, 422].includes(response.status())).toBeTruthy();
    console.log(response);


});
