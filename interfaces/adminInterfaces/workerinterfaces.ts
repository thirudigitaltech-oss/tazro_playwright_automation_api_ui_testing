// Worker List APi Response 

export interface workerListResponseInterfaces {
    id: number | null,
    name: string,
    phone: string,
    is_active: boolean,
    is_busy: boolean,
    zone_id: number | null
}


// Add Wokrer Api Request Interface & Resonse Interface
export interface addworkerrequestinterface {
    name: string,
    phone: string,
    password: string
}


export interface addworkerResponse {
    message: string,
    id: number
}


// Delete Worker APi Response

export interface DeleteWorkerresponse {
    message: string,
}

//zone id worerkapi request intreace--------------

export interface workerzoneidrequest {
    zone_id: number
}

export interface workerzoneidresponse {
    message: string;

}



//Zones List

  export interface ZonlistResponseInterfaces  {
    id: number,
    name: string,
    center_lat: number,
    center_lon: number,
    radius_meters: number,
    is_active: boolean,
    created_at: string
  }



