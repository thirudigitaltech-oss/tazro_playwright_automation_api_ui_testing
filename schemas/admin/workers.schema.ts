import { z } from "zod";

/* ==========================================
   Worker List Response
========================================== */

export const WorkerListResponseSchema = z.object({
    id: z.number().nullable(),
    name: z.string(),
    phone: z.string(),
    is_active: z.boolean(),
    is_busy: z.boolean(),
    zone_id: z.number().nullable()
});


/* ==========================================
   Worker List API Response
========================================== */

export const WorkersListResponseSchema =
    z.array(WorkerListResponseSchema);


/* ==========================================
   Add Worker Request
========================================== */

export const AddWorkerRequestSchema = z.object({
    name: z.string(),
    phone: z.string(),
    password: z.string()
});


/* ==========================================
   Add Worker Response
========================================== */

export const AddWorkerResponseSchema = z.object({
    message: z.string(),
    id: z.number()
});


/* ==========================================
   Delete Worker Response
========================================== */

export const DeleteWorkerResponseSchema = z.object({
    message: z.string()
});


/* ==========================================
   Worker Zone ID Request
========================================== */

export const WorkerZoneIdRequestSchema = z.object({
    zone_id: z.number()
});


/* ==========================================
   Worker Zone ID Response
========================================== */

export const WorkerZoneIdResponseSchema = z.object({
    message: z.string()
});