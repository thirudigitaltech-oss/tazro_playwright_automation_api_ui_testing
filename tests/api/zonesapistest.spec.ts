import { test, expect } from "../../fixtures/api-fixtures";
import { getCreateZone } from "../../payloads/adminpayloads/zonespayloads";
import { CreateZoneResponse, ZonesListResponseInterface } from "../../interfaces/adminInterfaces/zonesinterfaces";


test("TC01 zones list api test", async ({ apiObjects }) => {
    const zoneslist = apiObjects.getZonesApi();

    const response = await zoneslist.zonesList()

    expect(response.status()).toBe(200);

    const body: ZonesListResponseInterface[] = await response.json();
    
    expect(body.length).toBeGreaterThan(0); 

   
    const first = body[0]; 

   
    expect(first.id).toBeDefined();
    expect(typeof first.id).toBe("number");

    expect(first.name).toBeDefined();
    expect(typeof first.name).toBe("string");

    expect(first.center_lat).toBeDefined();
    expect(typeof first.center_lat).toBe("number");

    expect(first.center_lon).toBeDefined();
    expect(typeof first.center_lon).toBe("number");

    expect(first.radius_meters).toBeDefined();
    expect(typeof first.radius_meters).toBe("number");

    expect(first.is_active).toBeDefined();
    expect(typeof first.is_active).toBe("boolean");

    expect(first.created_at).toBeDefined();
    expect(typeof first.created_at).toBe("string");
});


test("TC02 create Zones Test", async ({ apiObjects }) => {
    const createZonesapi = apiObjects.getZonesApi();

    const createzoneData = {
        "name": "Nizamabad",
        "center_lat": 18.6725,
        "center_lon": 78.0941,
        "radius_meters": 20000,
        "is_active": true

    }

    const ceratezonePayloads = getCreateZone(createzoneData.name, createzoneData.center_lat,
        createzoneData.center_lon, createzoneData.radius_meters, createzoneData.is_active)

    const response = await createZonesapi.createNewZone(ceratezonePayloads);

    expect(response.status()).toBe(200);

    const body: CreateZoneResponse = await response.json();

    expect(body.message).toBeDefined();
    expect(typeof body.message).toBe("string");

    expect(body.id).toBeDefined();
    expect(typeof body.id).toBe("number");


})