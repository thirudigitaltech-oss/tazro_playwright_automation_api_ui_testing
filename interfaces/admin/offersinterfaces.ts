// offers list api interfaces 

export interface OffersListResponseInterfaces{
    "id": 0,
    "title": "string",
    "description": "string",
    "code": "string",
    "discount_type": "string",
    "discount_value": 0,
    "min_order": 0,
    "max_discount": 0,
    "is_active": true,
    "image": "string",
    "created_at": "string"
  }


  // Create Offfer Interfcase request and Response 

  export interface CreateOfferRequestInterface{
  title: string,
  description: string,
  code: string,
  discount_type: string,
  discount_value: number | null,
  min_order: number | null,
  max_discount: number | null,
  image: string
}

// Response create  offer intrefaces 
export interface CreateOfferResponse  {
  message: string,
  id: number | null,
  notified: number | null
}


//Delete API Response Interface

export interface DeletresponseInterface{
  message: string
}