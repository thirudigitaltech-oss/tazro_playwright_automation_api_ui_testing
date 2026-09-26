import { addworkerrequestinterface, workerzoneidrequest } from "../../interfaces/adminInterfaces/workerinterfaces";

export const getaddWorkerpayoads = (name: string, phone: string, password: string): addworkerrequestinterface => {
    return {
        name: name,
        phone: phone,
        password: password
    }
}


// worker zone id payoads 
export const getaddworkerzoneid = (zone_id: number): workerzoneidrequest => {
    return {
        zone_id: zone_id
    }
}


