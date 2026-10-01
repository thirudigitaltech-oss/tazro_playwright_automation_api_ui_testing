export interface ProductResponseInterfaces {
  id: number;
  name: string;
  price: number;
  original_price: number;
  cost_price: number;
  unit: string;
  description: string;
  image: string;
  stock: number;
  category: string;
  is_active: boolean;
}


/*====================================
Add Products API Request Interfaces
======================================*/

export interface AddProductsApiRequestInterfaces{

  name: string,
  price: number,
  original_price: number,
  cost_price: number,
  unit: string,
  description: string,
  image: string,
  stock: number,
  category: string,
  is_active: boolean

}


export interface AddProductResponse{
 
  message: string,
  id: number

}


export interface EditRequestInterfaces{
  
  name: string,
  price: string,
  original_price: string,
  unit: string,
  description: string,
  image: string,
  stock: number,
  category: string,
  is_active: boolean
}

export interface EditResponse{
  message: string
}



/*============================
Delete Product interfaces
==============================*/

export interface DeleteResponseInterface {
  
  message: string

}



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

