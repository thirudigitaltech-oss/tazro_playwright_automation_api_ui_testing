import { test, expect } from "../../../fixtures/api-fixtures";
import { OffersListResponseInterfaces, CreateOfferResponse, DeletresponseInterface } from "../../../interfaces/admin/offersinterfaces";
import offersData from "../../../testdata/admintestdata/offersdata/createoffersdata.json";
import { getCreateOffers } from "../../../payloads/adminpayloads/offerspayloads";
import { expectSuccess } from "../../../utils/assertions";
import { OffersListResponseSchema, CreateOfferResponseSchema, DeleteOfferResponseSchema } from "../../../schemas/admin/offers.schema";


test.describe("Offers APIs Testing", () => {

    test("TC01 - Verify Offers List API response and data types", async ({ apiObjects }) => {
        const offers = apiObjects.getOffersApis();

        const response = await offers.offerApiRequest();

        expectSuccess(response.status())

        const offersBody: OffersListResponseInterfaces[] = await response.json();

        OffersListResponseSchema.parse(offersBody);

    });


    test("create Offer Api Test", async ({ apiObjects }) => {
        const offersApi = apiObjects.getOffersApis();

        const payloads = getCreateOffers(offersData.title,
            offersData.description,
            offersData.code,
            offersData.discount_type,
            offersData.discount_value,
            offersData.min_order,
            offersData.max_discount,
            offersData.image);


        const response = await offersApi.createOfferApiRequest(payloads);

        expectSuccess(response.status());
        const ResponseBody: CreateOfferResponse = await response.json();
        const generatedOfferId = ResponseBody.id;

        CreateOfferResponseSchema.parse(ResponseBody);

        // Delete Offer
        const deleteResponse = await offersApi.deleteOfferApiRequest(generatedOfferId as any);

        expectSuccess((deleteResponse as any).status())

        const deleteResponseBody: DeletresponseInterface = await (await deleteResponse as any).json();
         DeleteOfferResponseSchema.parse(deleteResponseBody);

      

    });



});