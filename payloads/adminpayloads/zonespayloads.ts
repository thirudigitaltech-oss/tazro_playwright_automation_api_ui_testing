import { CreateZonesRequest } from "../../interfaces/adminInterfaces/zonesinterfaces";

export const getCreateZone = (name: string,
    center_lat: number,
    center_lon: number,
    radius_meters: number,
    is_active: boolean): CreateZonesRequest => {

    return {
        name,
        center_lat,
        center_lon,
        radius_meters,
        is_active
    }
}