import { test, expect } from "../../../fixtures/api-fixtures";
import { getCreateZone, getEditZonePayloads } from "../../../payloads/adminpayloads/zonespayloads";
import { CreateZoneResponse, ZonesListResponseInterface, EditZoneResponseInterface, DeleteZoneResponseInterface } from "../../../interfaces/admin/zonesinterfaces";
import { expectSuccess } from "../../../utils/assertions";
import { ZonesListResponseSchema, CreateZoneResponseSchema,EditZoneResponseSchema ,DeleteZoneResponseSchema  } from "../../../schemas/admin/zones.schema";
import { createzoneData } from "../../../testdata/admintestdata/zones/createzones";
import { editzonedata } from "../../../testdata/admintestdata/zones/editzone";



test("TC01 zones list api test", async ({ apiObjects }) => {
    const zoneslist = apiObjects.getZonesApi();

    const response = await zoneslist.zonesList()

    expectSuccess(response.status())

    const body: ZonesListResponseInterface[] = await response.json();

    ZonesListResponseSchema.parse(body);


});


test("TC02 create Zones Test", async ({ apiObjects }) => {
    const Zonesapi = apiObjects.getZonesApi();

    const ceratezonePayloads = getCreateZone(createzoneData.name, createzoneData.center_lat,
        createzoneData.center_lon, createzoneData.radius_meters, createzoneData.is_active)

    const response = await Zonesapi.createNewZone(ceratezonePayloads);

    expectSuccess(response.status());

    const body: CreateZoneResponse = await response.json();

    const generated_id = body.id;
    CreateZoneResponseSchema.parse(body)


    // Edit Zoes Api 

    const editzonepayloads = getEditZonePayloads(editzonedata.name, editzonedata.center_lat,
        editzonedata.center_lon, editzonedata.radius_meters, editzonedata.is_active);


    const editResponse = await Zonesapi.editZone(generated_id, editzonepayloads);

    if (editResponse.status() !== 200) {
        const errorBody = await editResponse.json();
        console.log("FASTAPI 422 ERROR DETAILS:", JSON.stringify(errorBody, null, 2));
    }
    expectSuccess(editResponse.status());

    const editBody: EditZoneResponseInterface = await editResponse.json();

    EditZoneResponseSchema .parse(editBody);



    //delete zone id api test

    const deleteResponse = await Zonesapi.deleteZone(generated_id);

    expectSuccess(deleteResponse.status());

    const deleteResponseBody: DeleteZoneResponseInterface = await deleteResponse.json();
    DeleteZoneResponseSchema .parse(deleteResponseBody);

})