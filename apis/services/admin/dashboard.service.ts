import {APIRequestContext ,APIResponse} from "@playwright/test";
import {ApiClient} from "../../../apis/clients/api-client";

export class DashbordAPI extends ApiClient{

    private readonly dashboard_endpoint : string;

    constructor(request:APIRequestContext){
        super(request);
        this.dashboard_endpoint = "/api/admin/dashboard";
    }

   
  async getDashboard():Promise <APIResponse> {
    return this.get(this.dashboard_endpoint);
  }

}