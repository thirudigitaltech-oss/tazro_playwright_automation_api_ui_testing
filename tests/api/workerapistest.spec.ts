import { test, expect } from "../../fixtures/api-fixtures";
import { workerListResponseInterfaces, addworkerResponse, DeleteWorkerresponse, workerzoneidresponse, ZonlistResponseInterfaces } from "../../interfaces/adminInterfaces/workerinterfaces";
import { getaddWorkerpayoads, getaddworkerzoneid } from "../../payloads/adminpayloads/workerspayloads";


test.describe("Workers Api testing ", async () => {


    /*==================================================
      Worker List API Hit
     ====================================================*/

    test("TC01 WorkerList Api Testing", async ({ apiObjects }) => {
        const workerList = apiObjects.getWorkersApi();

        const response = await workerList.workerlistAiRequest();

        expect((response as any).status()).toBe(200);


        const body: workerListResponseInterfaces[] = await (await response as any).json();


        for (const list of body) {


            expect(list.id).toBeDefined();
            expect(typeof list.id).toBe("number");

            expect(list.name).toBeDefined();
            expect(typeof list.name).toBe("string");

            expect(list.phone).toBeDefined();
            expect(typeof list.phone).toBe("string");

            expect(list.is_active).toBeDefined();
            expect(typeof list.is_active).toBe("boolean");

            expect(list.is_busy).toBeDefined();
            expect(typeof list.is_busy).toBe("boolean");

            expect(list.zone_id).toBeDefined();


            console.log(list)


        }

    });

    /*==============================================
       Add Worker API Hit
     ===============================================*/
    test("TC02 Add & Delete Worker API Test", async ({ apiObjects }) => {
        const worker = apiObjects.getWorkersApi();

        const AddData = {
            "name": "Laxmi Kodaganti",
            "phone": "9949195184",
            "password": "venky123123"
        }

        const payloads = getaddWorkerpayoads(AddData.name, AddData.phone, AddData.password);

        // 1. Add Worker Request
        const addResponse = await worker.addWorkerApiRequest(payloads);
        expect(addResponse.status()).toBe(200);

        const addBody: addworkerResponse = await addResponse.json();
        const generated_id = addBody.id;
        console.log(`Worker created successfully with ID: ${generated_id}`);


        // 2. Add Worker Response Validation
        expect(addBody).toBeDefined();
        expect(addBody.id).toBeDefined();
        expect(typeof addBody.id).toBe("number");


        const zonePayload = {
            "zone_id": 2  // Zone ID
        };

        const zonepayloads = getaddworkerzoneid(zonePayload.zone_id);

        // Ikkada generated_id and zonePayload rendu pass chesthunnam
        const zoneResponse = await worker.assignWokerZoneRequest(zonepayloads, generated_id);
        expect(zoneResponse.status()).toBe(200);

        const zoneBody: workerzoneidresponse = await zoneResponse.json();
        expect(zoneBody.message).toBeDefined();
        console.log(`Worker with ID: ${generated_id} add zone  successfully!`);



        // 3. Delete Worker Request using the generated ID
        const deleteResponse = await worker.deleteWorkerApiRequest(generated_id);
        expect(deleteResponse.status()).toBe(200);

        const deleteBody: DeleteWorkerresponse = await deleteResponse.json();

        expect(deleteBody.message).toBeDefined();

        console.log(`Worker with ID: ${generated_id} deleted successfully!`);
    });






})
