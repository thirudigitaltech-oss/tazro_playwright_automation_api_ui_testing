import { test, expect } from "../../fixtures/api-fixtures";
import { OrderResponse ,UpdateOrderStatusSuccessResponseInterface } from "../../interfaces/adminInterfaces/orderinterfaces";
import {getupdateStatus} from "../../payloads/adminpayloads/orderspayloads";

const isStringOrNull = (v: unknown) => v === null || typeof v === "string";
const isNumberOrNull = (v: unknown) => v === null || typeof v === "number";

test.describe("Orders API testing", () => {

    test("TC01 Order List API Test", async ({ apiObjects }) => {
        const orders = apiObjects.getOrdersApi();            
        const response = await orders.orderslistAiRequest(); 

        // 1. Status code
        expect(response.status()).toBe(200);

        
        const body: OrderResponse[] = await response.json();
        expect(Array.isArray(body)).toBe(true);
        console.log(`Total orders: ${body.length}`);

        // 3. every order validate here
        for (const order of body) {
            
            expect(typeof order.id).toBe("number");
            expect(Array.isArray(order.items)).toBe(true);

         
            expect(isStringOrNull(order.status)).toBe(true);
            expect(isNumberOrNull(order.total)).toBe(true);
            expect(isStringOrNull(order.address)).toBe(true);
            expect(isStringOrNull(order.created_at)).toBe(true);

            // user object
            expect(order.user).not.toBeNull();
            expect(typeof order.user!.id).toBe("number");
            expect(isStringOrNull(order.user!.name)).toBe(true);
            expect(isStringOrNull(order.user!.phone)).toBe(true);

            // worker: assign || null
            if (order.worker) {
                expect(typeof order.worker.id).toBe("number");
                expect(isStringOrNull(order.worker.name)).toBe(true);
                expect(isStringOrNull(order.worker.phone)).toBe(true);
            }
        }
    });


    test("oreders api test sinario" , async({apiObjects})=>{
        const ordersstatus = apiObjects.getOrdersApi(); 


        const statusData = {"status":"DELIVERED"};

       
        const payloads = getupdateStatus(statusData.status);

         const orders_id = 427 ;


        const response =await  ordersstatus.orderStatusApiRequest(payloads , orders_id);

        expect((response as any).status()).toBe(200);

        const ordersBody : UpdateOrderStatusSuccessResponseInterface = await (await response as any ).json();

        expect(ordersBody.message).toBeDefined();
        expect(typeof ordersBody.message).toBe("string");

        console.log(ordersBody.message);


    })

});