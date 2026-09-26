import { AddProductsApiRequestInterfaces } from "../../interfaces/adminInterfaces/productsapiinterfaces";
import { EditRequestInterfaces } from "../../interfaces/adminInterfaces/productsapiinterfaces";

export const getaddProductsPayloads = (
    name: string,
    price: number,
    original_price: number,
    cost_price: number,
    unit: string,
    description: string,
    image: string,
    stock: number,
    category: string,
    is_active: boolean
): AddProductsApiRequestInterfaces => {
    return {
        name,
        price,
        original_price,
        cost_price,
        unit,
        description,
        image,
        stock,
        category,
        is_active,
    };
};

/*=========================================
Edit Product Payloads
=========================================== */

export const geteditProductsPayloads = (
    name: string,
    price: string,
    original_price: string,
    unit: string,
    description: string,
    image: string,
    stock: number,
    category: string,
    is_active: boolean
): EditRequestInterfaces => {
    return {
        name:name,
        price:price,
        original_price:original_price,
        unit:unit,
        description:description,
        image:image,
        stock:stock,
        category:category,
        is_active:is_active,
    };
};