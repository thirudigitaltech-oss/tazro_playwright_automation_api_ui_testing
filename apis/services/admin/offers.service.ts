import {APIRequestContext , APIResponse} from "@playwright/test";
import { ApiClient} from "../../../apis/clients/api-client";
import {CreateOfferRequestInterface} from "../../../interfaces/admin/offersinterfaces";

export class OffersApis extends ApiClient{

    private readonly offerapi_endpoint :string;
    private readonly createOffer_endpoint: string
    private readonly deleteoffer_endpoint :string;

    constructor(request:APIRequestContext){
        super(request);

        this.offerapi_endpoint = "/api/admin/offers";
        this.createOffer_endpoint= "/api/admin/offers";
        this.deleteoffer_endpoint = "/api/admin/offers";

    }

    async offerApiRequest(headers ? :Record<string , any>):Promise<APIResponse>{
        const response = await  this.get( this.offerapi_endpoint , headers);
        return response;
    }

  // Create Offer API Method
    async createOfferApiRequest(payloads:CreateOfferRequestInterface , headers?: Record<string , any>):Promise<APIResponse>{
        const response = await this.post(this.createOffer_endpoint, payloads, headers);
        return response;
    }

    async deleteOfferApiRequest(offerid:number):Promise<APIResponse>{

        const endpoint = `${this.deleteoffer_endpoint}/${offerid}`;
        const response = await this.delete(endpoint , offerid);
        return response;

    }
}