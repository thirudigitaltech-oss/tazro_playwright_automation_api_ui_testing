import {APIRequestContext ,APIResponse} from "@playwright/test";
import {BaseAPI} from "../../../utils/baseapi";

export class DashbordAPI extends BaseAPI{

    private readonly dashboard_endpoint : string;

    constructor(request:APIRequestContext){
        super(request);
        this.dashboard_endpoint = "/api/admin/dashboard";
    }

   
  async getDashboard():Promise <APIResponse> {
    return this.getRequest(this.dashboard_endpoint);
  }

}