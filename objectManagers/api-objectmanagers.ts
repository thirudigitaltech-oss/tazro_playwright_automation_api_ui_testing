import { APIRequestContext } from "@playwright/test";
import { LoginApi } from "../pages-apis/api/adminapis/lognapi";
import { DashbordAPI } from "../pages-apis/api/adminapis/dashboardapi";
import { ProductsApi} from "../pages-apis/api/adminapis/productapi";
import {WorkersApi} from "../pages-apis/api/adminapis/workersapis";
import {ZonesApi} from "../pages-apis/api/adminapis/zonesapis";
import {OrdersApi} from "../pages-apis/api/adminapis/ordersapis";
import {OffersApis} from "../pages-apis/api/adminapis/offersapis";




export class APIObjectManagers {

    private readonly request: APIRequestContext;
     private  loginapi?: LoginApi ;
     private  dashboardapi ? : DashbordAPI ;
     private productsapi ? : ProductsApi ;
     private workersapi? : WorkersApi ;
     private zonesapis ? : ZonesApi;
     private ordersapi ? : OrdersApi;
     private offersapis ? : OffersApis;

    constructor(request: APIRequestContext) {
        this.request = request
    }



    getLoginApi(): LoginApi {
        if (!this.loginapi) {
           this.loginapi = new LoginApi(this.request);
        }
        return this.loginapi ;
    }

    getDashbordAPI(): DashbordAPI{
        if(!this. dashboardapi ){
            this. dashboardapi  = new DashbordAPI(this.request)
            
        } 
        return this.dashboardapi ;
    } ;

    getProductsApi(): ProductsApi {
        if(!this.productsapi){
            this.productsapi = new ProductsApi(this.request);
        }return this.productsapi ;
    }

    getWorkersApi(): WorkersApi {
        if(!this.workersapi){
            this.workersapi = new WorkersApi(this.request);
        } return this.workersapi;
    }

    getZonesApi(): ZonesApi{
        if(!this.zonesapis){
            this.zonesapis = new ZonesApi(this.request);

        } return this.zonesapis ;
    }

    
    getOrdersApi(): OrdersApi{
        if(!this.ordersapi){
            this.ordersapi = new OrdersApi(this.request);
        } return this.ordersapi ;
    }


    getOffersApis(): OffersApis{
        if(!this.offersapis) {
            this.offersapis = new OffersApis(this.request);
        } return this.offersapis ;
    }


}