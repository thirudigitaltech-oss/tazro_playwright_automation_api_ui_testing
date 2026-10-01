import {APIRequestContext , APIResponse} from "@playwright/test";
import {BaseAPI} from "../../../utils/baseapi";

export class OffersApis extends BaseAPI{

    private readonly offerapi_endpoint :string

    constructor(request:APIRequestContext){
        super(request);

        this.offerapi_endpoint = "/api/admin/offers";

    }

    async offerApiRequest(headers ? :Record<string , any>):Promise<APIResponse>{
        const response = await  this.getRequest( this.offerapi_endpoint , headers);
        return response;
    }
}