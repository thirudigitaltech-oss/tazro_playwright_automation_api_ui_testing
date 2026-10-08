import {Page ,Locator} from "@playwright/test";
import {BasePage} from "../../../pages/base/base-page";

export class OrdersPage extends BasePage {
    private readonly orederpage: Locator;
    
    constructor(page:Page){
        super(page)

        this.orederpage = page.getByRole("button" ,{name:"Orders"});
    }

    async verifyPageLoaded(){

    }

    async oredrpage(){
        await this.clickAction(this.orederpage)
    }



}