// Zones List Interfaces 

export interface ZonesListResponseInterface {
    length(length: any): unknown
    id: number,
    name: string,
    center_lat: number,
    center_lon: number,
    radius_meters: number | null,
    is_active: boolean,
    created_at: string
  }



// Create Zones Request Interface
export interface CreateZonesRequest{
  name: string,
  center_lat: number,
  center_lon: number,
  radius_meters: number,
  is_active: boolean
}

export interface CreateZoneResponse{
  message: string,
  id: number 
}


//Edit Zones Interfaces 


export interface EditZoneRequestInterfcae{
  name: string,
  center_lat: number,
  center_lon: number,
  radius_meters: number | null,
  is_active: boolean
}

export interface EditZoneResponseInterface{
  message : string
}


//Delete Response interface

export interface DeleteZoneResponseInterface{
  message : string
}