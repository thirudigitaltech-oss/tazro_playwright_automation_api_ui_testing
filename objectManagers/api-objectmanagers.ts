import { APIRequestContext } from "@playwright/test";
import { LoginApi } from "../apis/services/admin/login.service";
import { DashbordAPI } from "../apis/services/admin/dashboard.service";
import { ProductsApi} from "../apis/services/admin/products.service";
import {WorkersApi} from "../apis/services/admin/workers.service";
import {ZonesApi} from "../apis/services/admin/zones.service";
import {OrdersApi} from "../apis/services/admin/orders.service";
import {OffersApis} from "../apis/services/admin/offers.service";

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