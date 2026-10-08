import { APIRequestContext, APIResponse } from "@playwright/test";
import { ApiClient} from "../../../apis/clients/api-client";
import {UpdateOrderStatusRequestInterface} from "../../../interfaces/admin/orderinterfaces"

export class  OrdersApi extends ApiClient {

    private readonly ordersListapi_endpoint: string;
    private readonly oredrstatus_endpoint :string ;
   


    constructor(request: APIRequestContext) {
        super(request);

        this.ordersListapi_endpoint = "/api/admin/orders";
         this.oredrstatus_endpoint = "/api/admin/orders";
      
       
    }

    //ordersList Api Request ---------------

    async orderslistAiRequest(): Promise<APIResponse> {
        const response = await this.get(this.ordersListapi_endpoint);
        return response;
    };


    //oredr status api request method 

    async orderStatusApiRequest(payloads: UpdateOrderStatusRequestInterface, order_id: number, headers? :Record<string ,string>):Promise<APIResponse>{
        const endpoint = `${ this.oredrstatus_endpoint}/${order_id}/status`;
        const response =await this.put(endpoint, payloads ,headers );
        return response ;
    };

}