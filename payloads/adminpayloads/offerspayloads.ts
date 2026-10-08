import { CreateOfferRequestInterface } from "../../interfaces/admin/offersinterfaces";

export const getCreateOffers = (
    title: string,
    description: string,
    code: string,
    discount_type: string,
    discount_value: number,
    min_order: number,
    max_discount: number,
    image: string
): CreateOfferRequestInterface => {
    return {
        title,
        description,
        code,
        discount_type,
        discount_value,
        min_order,
        max_discount,
        image
    };
};
