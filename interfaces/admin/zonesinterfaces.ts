// Zones List Response Interface

export interface ZonesListResponseInterface {
    id: number;
    name: string;
    center_lat: number;
    center_lon: number;
    radius_meters: number | null;
    is_active: boolean;
    created_at: string;
}


// Create Zone Request Interface

export interface CreateZonesRequest {
    name: string;
    center_lat: number;
    center_lon: number;
    radius_meters: number;
    is_active: boolean;
}


// Create Zone Response Interface

export interface CreateZoneResponse {
    message: string;
    id: number;
}


// Edit Zone Request Interface

export interface EditZoneRequestInterface {
    name: string;
    center_lat: number;
    center_lon: number;
    radius_meters: number | null;
    is_active: boolean;
}


// Edit Zone Response Interface

export interface EditZoneResponseInterface {
    message: string;
}


// Delete Zone Response Interface

export interface DeleteZoneResponseInterface {
    message: string;
}