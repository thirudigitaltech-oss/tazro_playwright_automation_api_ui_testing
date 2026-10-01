import {APIRequestContext , APIResponse} from "@playwright/test";
import {BaseAPI} from "../../../utils/baseapi";
import {CreateZonesRequest ,EditZoneRequestInterfcae} from "../../../interfaces/adminInterfaces/zonesinterfaces";




export class ZonesApi extends BaseAPI{

    private readonly zonesList_endpoint : string;
    private readonly createzone_endpoint : string;
    private readonly editZone_endpoint :string;
    private readonly deletezone_endpoint:string ;

    
    constructor(request: APIRequestContext){
        super(request);
       
        this.zonesList_endpoint = "/api/admin/zones";
        this.createzone_endpoint = "/api/admin/zones";
        this.editZone_endpoint = "/api/admin/zones";
        this.deletezone_endpoint = "/api/admin/zones";




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

    //edit zone api request method

    async editZone(zone_id:number, payloads : EditZoneRequestInterfcae , headers?: Record<string, string>):Promise<APIResponse>{

        const endpoint = `${this.editZone_endpoint}/${zone_id}`

        const response = await this.putRequest(endpoint ,  payloads, headers)
        return response;

    }

    async deleteZone(zone_id:number): Promise<APIResponse>{
        const endpoint = `${this.deletezone_endpoint}/${zone_id}`
        const response = await this.deleteRequest(endpoint);

        return response
    }

    
}