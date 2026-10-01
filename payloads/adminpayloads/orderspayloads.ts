import {UpdateOrderStatusRequestInterface} from "../../interfaces/adminInterfaces/orderinterfaces";

export const getupdateStatus = (status:string) : UpdateOrderStatusRequestInterface =>{
    return {
        status
    }
}