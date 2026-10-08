import { z } from "zod";

export const DashboardResponseSchema = z.object({
    total_products: z.number(),
    active_products:z.number(),
    total_workers: z.number(),
    online_workers: z.number(),
    busy_workers: z.number()
});