import { z } from "zod";

/* ==========================================
   User Info Schema
========================================== */

export const UserInfoSchema = z.object({
    id: z.number(),
    name: z.string().nullable(),
    phone: z.string().nullable()
});


/* ==========================================
   Worker Info Schema
========================================== */

export const WorkerInfoSchema = z.object({
    id: z.number(),
    name: z.string().nullable(),
    phone: z.string().nullable()
});


/* ==========================================
   Order Response Schema
========================================== */

export const OrderResponseSchema = z.object({
    id: z.number(),
    status: z.string().nullable(),
    total: z.number().nullable(),
    address: z.string().nullable(),
    created_at: z.string().nullable(),

    user: UserInfoSchema.nullable(),

    worker: WorkerInfoSchema.nullable(),

    items: z.array(z.any())
});


/* ==========================================
   Orders List Response Schema
========================================== */

export const OrdersListResponseSchema =
    z.array(OrderResponseSchema);


/* ==========================================
   PUT Order Status Request Schema
========================================== */

export const UpdateOrderStatusRequestSchema = z.object({
    status: z.string()
});


/* ==========================================
   PUT Order Status Success Response
========================================== */

export const UpdateOrderStatusSuccessResponseSchema = z.object({
    message: z.string()
});


/* ==========================================
   401 Auth Error
========================================== */

export const AuthErrorResponseSchema = z.object({
    detail: z.string()
});


/* ==========================================
   422 Validation Error
========================================== */

export const ValidationErrorResponseSchema = z.object({
    detail: z.array(
        z.object({
            loc: z.array(z.union([
                z.string(),
                z.number()
            ])),
            msg: z.string(),
            type: z.string()
        })
    )
});