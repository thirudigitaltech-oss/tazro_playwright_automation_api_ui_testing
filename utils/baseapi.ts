// BaseApi class is a parent calss in sode tha base page we crete  API Request 
//in Base Api class we can create the request wrapers it os cretae once reusing all child pages 
// we creet post , get , put ,patch , delet , ect 
//what we sent to request in post , what we want (first  Endpoint , Payloads nothing but request data , headers  like address formart )

import { APIRequestContext, APIResponse } from "@playwright/test";


export class BaseAPI {
    protected request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }


    //getRequest Method (wraper)

    async getRequest(
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

    async postRequest(endpoint: string, payloads: any, headers?: Record<string, string>): Promise<APIResponse> {
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




    async putRequest(endpoint: string, payloads: any, queryparams?: Record<string, string | number | boolean>, headers?: Record<string, string>): Promise<APIResponse> {
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
    async deleteRequest(endpoint: string, id?: number, headers?: Record<string, string>): Promise<APIResponse> {
        const response = await this.request.delete(endpoint, {
            headers: {
                "Content-Type": "application/json",
                ...headers
            }
        });

        return response;
    }

}