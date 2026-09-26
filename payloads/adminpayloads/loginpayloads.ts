import {LoginRequestInterfaces} from "../../interfaces/adminInterfaces/logininterfaces";

export const getLoginpaylaods = (email:string , password: string) : LoginRequestInterfaces =>{
	return {
		email:email,
		password: password,
	};
    

}