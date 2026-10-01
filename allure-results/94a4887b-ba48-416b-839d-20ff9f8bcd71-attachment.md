# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\api\zonesapistest.spec.ts >> TC02 create Zones Test
- Location: tests\api\zonesapistest.spec.ts:44:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  6   | test("TC01 zones list api test", async ({ apiObjects }) => {
  7   |     const zoneslist = apiObjects.getZonesApi();
  8   | 
  9   |     const response = await zoneslist.zonesList()
  10  | 
  11  |     expect(response.status()).toBe(200);
  12  | 
  13  |     const body: ZonesListResponseInterface[] = await response.json();
  14  | 
  15  |     expect(body.length).toBeGreaterThan(0);
  16  | 
  17  | 
  18  |     const first = body[0];
  19  | 
  20  | 
  21  |     expect(first.id).toBeDefined();
  22  |     expect(typeof first.id).toBe("number");
  23  | 
  24  |     expect(first.name).toBeDefined();
  25  |     expect(typeof first.name).toBe("string");
  26  | 
  27  |     expect(first.center_lat).toBeDefined();
  28  |     expect(typeof first.center_lat).toBe("number");
  29  | 
  30  |     expect(first.center_lon).toBeDefined();
  31  |     expect(typeof first.center_lon).toBe("number");
  32  | 
  33  |     expect(first.radius_meters).toBeDefined();
  34  |     expect(typeof first.radius_meters).toBe("number");
  35  | 
  36  |     expect(first.is_active).toBeDefined();
  37  |     expect(typeof first.is_active).toBe("boolean");
  38  | 
  39  |     expect(first.created_at).toBeDefined();
  40  |     expect(typeof first.created_at).toBe("string");
  41  | });
  42  | 
  43  | 
  44  | test("TC02 create Zones Test", async ({ apiObjects }) => {
  45  |     const Zonesapi = apiObjects.getZonesApi();
  46  | 
  47  |     const createzoneData = {
  48  |         "name": "Nizamabad",
  49  |         "center_lat": 18.6725,
  50  |         "center_lon": 78.0941,
  51  |         "radius_meters": 20000,
  52  |         "is_active": true
  53  | 
  54  |     }
  55  | 
  56  |     const ceratezonePayloads = getCreateZone(createzoneData.name, createzoneData.center_lat,
  57  |         createzoneData.center_lon, createzoneData.radius_meters, createzoneData.is_active)
  58  | 
  59  |     const response = await Zonesapi.createNewZone(ceratezonePayloads);
  60  | 
  61  |     expect(response.status()).toBe(200);
  62  | 
  63  |     const body: CreateZoneResponse = await response.json();
  64  | 
  65  |     const generated_id = body.id;
  66  | 
  67  |     expect(body.message).toBeDefined();
  68  |     expect(typeof body.message).toBe("string");
  69  | 
  70  |     expect(body.id).toBeDefined();
  71  |     expect(typeof body.id).toBe("number");
  72  | 
  73  | 
  74  |     // Edit Zoes Api 
  75  | 
  76  |     const editzonedata = {
  77  |         "name": "Nizamabad",
  78  |         "center_lat": 18.1694,
  79  |         "center_lon": 78.3976,
  80  |         "radius_meters": 1500,
  81  |         "is_active": true
  82  |     }
  83  | 
  84  |     const editzonepayloads = getEditZonePayloads(editzonedata.name, editzonedata.center_lat,
  85  |         editzonedata.center_lon, editzonedata.radius_meters, editzonedata.is_active);
  86  | 
  87  | 
  88  |     const editResponse = await Zonesapi.editZone(generated_id, editzonepayloads);
  89  | 
  90  |     if (editResponse.status() !== 200) {
  91  |         const errorBody = await editResponse.json();
  92  |         console.log("FASTAPI 422 ERROR DETAILS:", JSON.stringify(errorBody, null, 2));
  93  |     }
  94  |     expect(editResponse.status()).toBe(200);
  95  | 
  96  |     const editBody: EditZoneResponseInterface = await editResponse.json();
  97  | 
  98  |     expect(editBody.message).toBeDefined();
  99  |     expect(typeof editBody.message).toBe("string");
  100 | 
  101 | 
  102 |     //delete zone id api test
  103 | 
  104 |     const deleteResponse = await Zonesapi.deleteZone(generated_id);
  105 | 
> 106 |     expect(deleteResponse.status()).toBe(200);
      |                                     ^ Error: expect(received).toBe(expected) // Object.is equality
  107 | 
  108 |     const deleteResponseBody: DeleteZoneResponseInterface = await deleteResponse.json();
  109 | 
  110 |     expect(deleteResponseBody.message).toBeDefined();
  111 |     expect(typeof deleteResponseBody.message).toBe("string");
  112 | 
  113 | 
  114 | })
```