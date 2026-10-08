import { test } from "../../../fixtures/api-fixtures";
import { getLoginpaylaods } from "../../../payloads/adminpayloads/loginpayloads";
import { LoginResponseInterfaces, ValidatioError } from "../../../interfaces/admin/logininterfaces"
import { expectSuccess, expectUnauthorized } from "../../../utils/assertions";
import { LoginResponseSchema  , LoginResponseErrorValidationSchema } from "../../../schemas/admin/login.schema";
import LoginData from "../../../testdata/admintestdata/login/login.data.json";

test.describe("Login Api Test", async () => {
    test("TC01 Login Api Testing", async ({ apiObjects }) => {
        const loginapi = apiObjects.getLoginApi();

        const payloads = getLoginpaylaods(LoginData.validLogin.email, LoginData.validLogin.password);
        const response = await loginapi.loginrequest(payloads);

        expectSuccess(response.status());

        //Response Body
        const body: LoginResponseInterfaces = await response.json();
        LoginResponseSchema.parse(body);

    });


    // Invalid Test Case

    test("TC02 invaid Credentil test", async ({ apiObjects }) => {

        const loginapi = apiObjects.getLoginApi();

        const payloads = getLoginpaylaods(LoginData.invalidLogin.email, LoginData.invalidLogin.password)

        const response = await loginapi.loginrequest(payloads);


        expectUnauthorized(response.status());

        const body: ValidatioError = await response.json();

        LoginResponseErrorValidationSchema.parse(body);

    })


});