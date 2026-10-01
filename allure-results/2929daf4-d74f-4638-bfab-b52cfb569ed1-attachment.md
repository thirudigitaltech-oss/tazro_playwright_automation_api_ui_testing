# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\api\workerapistest.spec.ts >> Workers Api testing  >> TC02 Add & Delete Worker API Test
- Location: tests\api\workerapistest.spec.ts:55:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 422
```

# Test source

```ts
  1   | import { test, expect } from "../../fixtures/api-fixtures";
  2   | import { workerListResponseInterfaces, addworkerResponse, DeleteWorkerresponse, workerzoneidresponse, ZonlistResponseInterfaces } from "../../interfaces/adminInterfaces/workerinterfaces";
  3   | import { getaddWorkerpayoads, getaddworkerzoneid } from "../../payloads/adminpayloads/workerspayloads";
  4   | 
  5   | 
  6   | test.describe("Workers Api testing ", async () => {
  7   | 
  8   | 
  9   |     /*==================================================
  10  |       Worker List API Hit
  11  |      ====================================================*/
  12  | 
  13  |     test("TC01 WorkerList Api Testing", async ({ apiObjects }) => {
  14  |         const workerList = apiObjects.getWorkersApi();
  15  | 
  16  |         const response = await workerList.workerlistAiRequest();
  17  | 
  18  |         expect((response as any).status()).toBe(200);
  19  | 
  20  | 
  21  |         const body: workerListResponseInterfaces[] = await (await response as any).json();
  22  | 
  23  | 
  24  |         for (const list of body) {
  25  | 
  26  | 
  27  |             expect(list.id).toBeDefined();
  28  |             expect(typeof list.id).toBe("number");
  29  | 
  30  |             expect(list.name).toBeDefined();
  31  |             expect(typeof list.name).toBe("string");
  32  | 
  33  |             expect(list.phone).toBeDefined();
  34  |             expect(typeof list.phone).toBe("string");
  35  | 
  36  |             expect(list.is_active).toBeDefined();
  37  |             expect(typeof list.is_active).toBe("boolean");
  38  | 
  39  |             expect(list.is_busy).toBeDefined();
  40  |             expect(typeof list.is_busy).toBe("boolean");
  41  | 
  42  |             expect(list.zone_id).toBeDefined();
  43  | 
  44  | 
  45  |             console.log(list)
  46  | 
  47  | 
  48  |         }
  49  | 
  50  |     });
  51  | 
  52  |     /*==============================================
  53  |        Add Worker API Hit
  54  |      ===============================================*/
  55  |     test("TC02 Add & Delete Worker API Test", async ({ apiObjects }) => {
  56  |         const worker = apiObjects.getWorkersApi();
  57  | 
  58  |         const AddData = {
  59  |             "name": "Laxmi Kodaganti",
  60  |             "phone": "9949195184",
  61  |             "password": "venky"
  62  |         }
  63  | 
  64  |         const payloads = getaddWorkerpayoads(AddData.name, AddData.phone, AddData.password);
  65  | 
  66  |         // 1. Add Worker Request
  67  |         const addResponse = await worker.addWorkerApiRequest(payloads);
> 68  |         expect(addResponse.status()).toBe(200);
      |                                      ^ Error: expect(received).toBe(expected) // Object.is equality
  69  | 
  70  |         const addBody: addworkerResponse = await addResponse.json();
  71  |         const generated_id = addBody.id;
  72  |         console.log(`Worker created successfully with ID: ${generated_id}`);
  73  | 
  74  | 
  75  |         // 2. Add Worker Response Validation
  76  |         expect(addBody).toBeDefined();
  77  |         expect(addBody.id).toBeDefined();
  78  |         expect(typeof addBody.id).toBe("number");
  79  | 
  80  | 
  81  |         const zonePayload = {
  82  |             "zone_id": 2  // Zone ID
  83  |         };
  84  | 
  85  |         const zonepayloads = getaddworkerzoneid(zonePayload.zone_id);
  86  | 
  87  |         // Ikkada generated_id and zonePayload rendu pass chesthunnam
  88  |         const zoneResponse = await worker.assignWokerZoneRequest(zonepayloads, generated_id);
  89  |         expect(zoneResponse.status()).toBe(200);
  90  | 
  91  |         const zoneBody: workerzoneidresponse = await zoneResponse.json();
  92  |         expect(zoneBody.message).toBeDefined();
  93  |         console.log(`Worker with ID: ${generated_id} add zone  successfully!`);
  94  | 
  95  | 
  96  | 
  97  |         // 3. Delete Worker Request using the generated ID
  98  |         const deleteResponse = await worker.deleteWorkerApiRequest(generated_id);
  99  |         expect(deleteResponse.status()).toBe(200);
  100 | 
  101 |         const deleteBody: DeleteWorkerresponse = await deleteResponse.json();
  102 | 
  103 |         expect(deleteBody.message).toBeDefined();
  104 | 
  105 |         console.log(`Worker with ID: ${generated_id} deleted successfully!`);
  106 |     });
  107 | 
  108 | 
  109 | 
  110 | 
  111 |  
  112 | 
  113 | })
```