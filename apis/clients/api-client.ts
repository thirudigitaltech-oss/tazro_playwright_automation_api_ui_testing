
import { APIRequestContext, APIResponse } from "@playwright/test";


export class ApiClient {
    protected request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }


    //getRequest Method (wraper)

    async get(
        endpoint: string,
        queryParams?: Record<string, string | number | boolean>,
        headers?: Record<string, string>
    ): Promise<APIResponse> {

        const response = await this.request.get(endpoint, {
            params: queryParams,
            headers: {
                "Content-Type": "application/json",
                ...headers
            },
        });

        return response;
    }


    //Post Method --------

    async post(endpoint: string, payloads: any, headers?: Record<string, string>): Promise<APIResponse> {
        const response = await this.request.post(endpoint,
            {
                data: payloads,
                headers: {
                    "Content-Type": "application/json",
                    ...headers
                },
            });
        return response;
    }




    async put(endpoint: string, payloads: any, queryparams?: Record<string, string | number | boolean>, headers?: Record<string, string>): Promise<APIResponse> {
        const response = await this.request.put(endpoint,
            {
                params: queryparams,
                data: payloads,
                headers: {
                    "Content-Type": "application/json",
                    ...headers
                },
            });
        return response;
    }



// Delete Request method
    async delete(endpoint: string, id?: number, headers?: Record<string, string>): Promise<APIResponse> {
        const response = await this.request.delete(endpoint, {
            headers: {
                "Content-Type": "application/json",
                ...headers
            }
        });

        return response;
    }

}