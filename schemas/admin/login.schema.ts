import { z } from "zod";

export const LoginResponseSchema = z.object({
    token: z.string(),
    admin_id: z.number(),
});


export const LoginResponseErrorValidationSchema = z.object({
  detail: z.string()
});