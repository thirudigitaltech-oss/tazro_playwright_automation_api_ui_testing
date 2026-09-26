import { APIRequestContext, APIResponse } from "@playwright/test";
import { BaseAPI } from "../../../utils/baseapi";
import { LoginRequestInterfaces } from "../../../interfaces/adminInterfaces/logininterfaces";

export class LoginApi extends BaseAPI {

    private readonly login_endpoint: string;

    constructor(request: APIRequestContext) {
        super(request);
        this.login_endpoint = "/api/admin/login";
    }

    // Login request using baseapi postRequest method
    async loginrequest(
        payloads: LoginRequestInterfaces,
        headers?: Record<string, string>
    ): Promise<APIResponse> {
        return await this.postRequest(this.login_endpoint, payloads, headers);
    }
}