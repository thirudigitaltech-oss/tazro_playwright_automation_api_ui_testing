import {APIRequestContext , APIResponse} from "@playwright/test";
import {BaseAPI} from "../../../utils/baseapi";
import {CreateZonesRequest} from "../../../interfaces/adminInterfaces/zonesinterfaces";



export class ZonesApi extends BaseAPI{

    private readonly zonesList_endpoint : string;
    private readonly createzone_endpoint : string;
    
    constructor(request: APIRequestContext){
        super(request);
       
        this.zonesList_endpoint = "/api/admin/zones";
        this.createzone_endpoint = "/api/admin/zones";

    }

    // zones list api method

    async zonesList():Promise<APIResponse>{
        const response = await this.getRequest(this.createzone_endpoint);
        return response
    }


    //crete new zone

    async createNewZone(payloads:CreateZonesRequest ):Promise<APIResponse>{

        const response = await this.postRequest(this.createzone_endpoint, payloads);
        return response ;

    }

    
}