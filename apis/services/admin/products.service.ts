import { APIRequestContext, APIResponse } from "@playwright/test";
import { ApiClient  } from "../../../apis/clients/api-client";
import { AddProductsApiRequestInterfaces, EditRequestInterfaces } from "../../../interfaces/admin/productsapiinterfaces";


export class ProductsApi extends ApiClient {

    private readonly product_endpoint: string;
    private readonly addproduct_endpoint: string;
    private readonly editproducts_endpoint: string;
    private readonly deleteproduct_endpoint: string;


    constructor(request: APIRequestContext) {
        super(request);

        this.product_endpoint = "/api/admin/products";
        this.addproduct_endpoint = "/api/admin/products";
        this.editproducts_endpoint = "/api/admin/products";
        this.deleteproduct_endpoint = "/api/admin/products";

    }

    async productsapiRequest(): Promise<APIResponse> {
        const response = await this.get(this.product_endpoint);
        return response;
    }


    async addProductsApiRequest(payloads: AddProductsApiRequestInterfaces, headers?: Record<string, string>): Promise<APIResponse> {
        const response = await this.post(this.addproduct_endpoint, payloads, headers);
        return response
    }

    async editProductapiRequest(id: number | string, payloads: EditRequestInterfaces, headers?: Record<string, string>): Promise<APIResponse> {

        const endpoint = `${this.editproducts_endpoint}/${id}`;
        const response = await this.put(endpoint, payloads, undefined, headers);

        return response;
    }



    async deleteProductRequest(id: number): Promise<APIResponse> {
        const endpoint = `${this.deleteproduct_endpoint}/${id}`
        const response = await this.delete(endpoint, id);
        return response;
    }


}