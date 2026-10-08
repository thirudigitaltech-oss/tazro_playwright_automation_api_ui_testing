import { APIRequestContext, APIResponse } from "@playwright/test";
import { ApiClient} from "../../../apis/clients/api-client";
import { addworkerrequestinterface ,   workerzoneidrequest } from "../../../interfaces/admin/workerinterfaces";

export class WorkersApi extends ApiClient {

    private readonly workerListapi_endpoint: string;
    private readonly addworker_endpoint: string;
    private readonly deleteWorker_endpoint: string;
    private readonly assignzone_endpoint : string;
    private readonly zoneslist_endpoint :string ;


    constructor(request: APIRequestContext) {
        super(request);

        this.workerListapi_endpoint = "/api/admin/workers";
        this.addworker_endpoint = "/api/admin/workers";
        this.deleteWorker_endpoint = "/api/admin/workers";
        this.assignzone_endpoint = "/api/admin/workers";
        this.zoneslist_endpoint = "/api/admin/zones"
    }


    //WorkerList Api Request ---------------

    async workerlistAiRequest(): Promise<APIResponse> {
        const response = await this.get(this.workerListapi_endpoint);
        return response;
    }


    // Add Worker Api Request ------------------------

    async addWorkerApiRequest(payloads: addworkerrequestinterface, headers?: Record<string, string>): Promise<APIResponse> {

        const response = await this.post(this.addworker_endpoint, payloads, headers);
        return response;
    };


    // Add Delete WorkerAPiRequest

    async deleteWorkerApiRequest(id: number): Promise<APIResponse> {
        const endpoint = `${this.deleteWorker_endpoint}/${id}`;
        // Base method aduguthundi kabatti ikkada id ni pass chesthunnam
        const response = await this.delete(endpoint);
        return response;
    }


    // zone assing to worker api request method

    async assignWokerZoneRequest(payloads:  workerzoneidrequest , workerid:number): Promise<APIResponse>{
        const endpoint = `${this.assignzone_endpoint}/${workerid}/zone`;
        const response =await this.put(endpoint, payloads);
        return response ;
    }


    async workerListRequest(){
        const response = await this.get(this.zoneslist_endpoint);
        return response;
    }


}