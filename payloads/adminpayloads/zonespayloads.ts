import { CreateZonesRequest, EditZoneRequestInterfcae } from "../../interfaces/adminInterfaces/zonesinterfaces";

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

//Edit Zones Payloads

export const getEditZonePayloads = (
    name: string,
    center_lat: number,
    center_lon: number,
    radius_meters: number | null,
    is_active: boolean): EditZoneRequestInterfcae => {
    return {
        name,
        center_lat,
        center_lon,
        radius_meters,
        is_active
    }

}

