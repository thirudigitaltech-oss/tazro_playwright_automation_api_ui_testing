import { test, expect } from "../../fixtures/api-fixtures";
import { getLoginpaylaods } from "../../payloads/adminpayloads/loginpayloads";
import { LoginResponseInterfaces ,ValidatioError} from "../../interfaces/adminInterfaces/logininterfaces"

test.describe("Login Api Test", async () => {
    test("TC01 Login Api Testing", async ({ apiObjects }) => {
        const loginapi = apiObjects.getLoginApi();

        const logindata = {
            
            email: "thirudigitaltech@gmailll.com",
            password: "ziyalt262019"
        }


    const payloads = getLoginpaylaods(logindata.email, logindata.password);
    const response = await loginapi.loginrequest(payloads);

    expect(response.status()).toBe(200);

    //Response Body
    const body: LoginResponseInterfaces = await response.json();
  
    expect(body.token).toBeDefined();
    expect(typeof body.token).toBe("string");
    expect(body.token.length).toBeGreaterThan(20);
    
    console.log("LoginApi Working Sucessfully With valid Credentils " ,body.token);

    //Validation response 
    expect(body.admin_id).toBeDefined();
    expect(typeof body.admin_id).toBe("number");
    expect(body.admin_id).toBeGreaterThan(0);

    console.log("Validation " ,body.admin_id);
    });

    test("TC02 invaid Credentil test" , async({apiObjects})=>{

        const loginpage = apiObjects.getLoginApi();

        const logindata ={
            email:"tryj@gmail",
            password:"ybubcubwu"
        }

        const payloads = getLoginpaylaods(logindata.email, logindata.password)
        
        const response =await loginpage.loginrequest(payloads);
        
        expect( response.status()).toBe(401);

        const body: ValidatioError = await response.json();

        expect(body.detail).toBeDefined();

        expect(typeof body.detail).toBe("string");

        console.log("invalid login test suceesfully get 401 unthrized ",body.detail);

    })

   
});