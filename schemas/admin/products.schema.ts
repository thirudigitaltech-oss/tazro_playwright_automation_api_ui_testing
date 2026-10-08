import { z } from "zod";

export const ProductResponseSchema = z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    original_price: z.number(),
    cost_price: z.number().nullable(),
    unit: z.string(),
    description: z.string().nullable(),
    image: z.string(),
    stock: z.number(),
    category: z.string(),
    is_active: z.boolean()
});

export const ProductsListResponseSchema =
    z.array(ProductResponseSchema);

export const AddProductResponseSchema = z.object({
    message: z.string(),
    id: z.number()
});

export const EditResponseSchema = z.object({
    message: z.string()
});

export const DeleteProductResponseSchema = z.object({
    message: z.string()
});