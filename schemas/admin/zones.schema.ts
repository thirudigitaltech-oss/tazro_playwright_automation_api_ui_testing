import { z } from "zod";

// Zones List Response Schema
export const ZoneResponseSchema = z.object({
    id: z.number(),
    name: z.string(),
    center_lat: z.number(),
    center_lon: z.number(),
    radius_meters: z.number().nullable(),
    is_active: z.boolean(),
    created_at: z.string()
});

export const ZonesListResponseSchema =
    z.array(ZoneResponseSchema);


// Create Zone Response Schema
export const CreateZoneResponseSchema = z.object({
    message: z.string(),
    id: z.number()
});


// Edit Zone Response Schema
export const EditZoneResponseSchema = z.object({
    message: z.string()
});


// Delete Zone Response Schema
export const DeleteZoneResponseSchema = z.object({
    message: z.string()
});