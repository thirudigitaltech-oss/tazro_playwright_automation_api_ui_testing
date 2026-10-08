import { test, expect } from "../../../fixtures/api-fixtures";
import { OrderResponse ,UpdateOrderStatusSuccessResponseInterface } from "../../../interfaces/admin/orderinterfaces";
import {getupdateStatus} from "../../../payloads/adminpayloads/orderspayloads";
import {expectSuccess} from "../../../utils/assertions";
import { OrdersListResponseSchema,  UpdateOrderStatusSuccessResponseSchema} from "../../../schemas/admin/orders.schema";

test.describe("Orders API testing", () => {

    test("TC01 Order List API Test", async ({ apiObjects }) => {
        const orders = apiObjects.getOrdersApi();            
        const response = await orders.orderslistAiRequest(); 

        // 1. Status code
        expectSuccess(response.status())

        
        const body: OrderResponse[] = await response.json();

        OrdersListResponseSchema.parse(body);
        


            
        })
    });


    test("oreders api test sinario" , async({apiObjects})=>{
        const ordersstatus = apiObjects.getOrdersApi(); 

        const statusData = {"status":"DELIVERED"};

       
        const payloads = getupdateStatus(statusData.status);

         const orders_id = 427 ;


        const response =await  ordersstatus.orderStatusApiRequest(payloads , orders_id);

        expectSuccess((response as any).status());

        const ordersBody : UpdateOrderStatusSuccessResponseInterface = await (await response as any ).json();

        UpdateOrderStatusSuccessResponseSchema.parse(ordersBody);

        console.log(ordersBody.message);


    });