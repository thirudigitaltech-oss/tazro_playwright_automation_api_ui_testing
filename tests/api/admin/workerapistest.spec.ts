import { test, expect } from "../../../fixtures/api-fixtures";
import { workerListResponseInterfaces, addworkerResponse, DeleteWorkerresponse, workerzoneidresponse } from "../../../interfaces/admin/workerinterfaces";
import { getaddWorkerpayoads, getaddworkerzoneid } from "../../../payloads/adminpayloads/workerspayloads";
import { expectSuccess } from "../../../utils/assertions";
import { WorkersListResponseSchema, AddWorkerResponseSchema, DeleteWorkerResponseSchema, WorkerZoneIdResponseSchema } from "../../../schemas/admin/workers.schema";
import { AddData, zonePayload } from "../../../testdata/admintestdata/workers/addworker"
//import { logApiResponse} from "../../../utils/api-logger"

test.describe("Workers Api testing ", async () => {


    /*==================================================
      Worker List API Hit
     ====================================================*/

    test("TC01 WorkerList Api Testing", async ({ apiObjects }) => {
        const workerList = apiObjects.getWorkersApi();

        const response = await workerList.workerlistAiRequest();

        expectSuccess((await response as any).status())


        const body: workerListResponseInterfaces[] = await (await response as any).json();
        WorkersListResponseSchema.parse(body);


    });

});

/*==============================================
   Add Worker API Hit
 ===============================================*/
test("TC02 Add & Delete Worker API Test", async ({ apiObjects }) => {
    const worker = apiObjects.getWorkersApi();

    const payloads = getaddWorkerpayoads(AddData.name, AddData.phone, AddData.password);

    // 1. Add Worker Request
    const addResponse = await worker.addWorkerApiRequest(payloads);
    expectSuccess(addResponse.status())

    const addBody: addworkerResponse = await addResponse.json();
    const generated_id = addBody.id;

    AddWorkerResponseSchema.parse(addBody);
    console.log(`Worker created successfully with ID: ${generated_id}`);


    //add zone

    const zonepayloads =
        getaddworkerzoneid(zonePayload.zone_id);

    const zoneResponse =
        await worker.assignWokerZoneRequest(
            zonepayloads,
            generated_id
        );


    const zoneBodyText = await zoneResponse.text();

    expectSuccess(zoneResponse.status());

    const zoneBody: workerzoneidresponse = await zoneResponse.json();
    WorkerZoneIdResponseSchema.parse(zoneBody);
    console.log(`Worker with ID: ${generated_id} add zone  successfully!`);



    // 3. Delete Worker Request using the generated ID
    
    const deleteResponse = await worker.deleteWorkerApiRequest(generated_id);
    expectSuccess(deleteResponse.status())

    const deleteBody: DeleteWorkerresponse = await deleteResponse.json();

    DeleteWorkerResponseSchema.parse(deleteBody);

    console.log(`Worker with ID: ${generated_id} deleted successfully!`);
});




