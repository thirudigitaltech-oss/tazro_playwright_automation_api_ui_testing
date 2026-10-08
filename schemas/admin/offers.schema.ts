import { z } from "zod";


// Offers List Response Schema
export const OfferResponseSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    code: z.string(),
    discount_type: z.string(),
    discount_value: z.number(),
    min_order: z.number(),
    max_discount: z.number(),
    is_active: z.boolean(),
    image: z.string(),
    created_at: z.string()
});


// Offers List API returns Array
export const OffersListResponseSchema =
    z.array(OfferResponseSchema);


// Create Offer Response Schema
export const CreateOfferResponseSchema = z.object({
    message: z.string(),
    id: z.number().nullable(),
    notified: z.number().nullable()
});


// Delete Offer Response Schema
export const DeleteOfferResponseSchema = z.object({
    message: z.string()
});