export interface CreateZonesRequest{
  name: string,
  center_lat: 0,
  center_lon: 0,
  radius_meters: 5000,
  is_active: true
}

export interface CreateZoneResponse{
  message: string,
  id: 0 
}