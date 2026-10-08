export interface LoginRequestInterfaces{
    email:string,
    password:string
}


export interface LoginResponseInterfaces{
    
  token: string,
  admin_id: number

}

export interface ValidatioError{
  detail: "string"
}


