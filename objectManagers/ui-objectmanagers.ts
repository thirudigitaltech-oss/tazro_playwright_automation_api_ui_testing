
import {Page} from "@playwright/test";
import {LoginPage} from "../pages/ui/adminpages/loginpage";
import {DashboardPage} from "../pages/ui/adminpages/dashboardpage";

export class PageObjectManagers {
   
    readonly page :Page ;
    private loginpage?: LoginPage;
    private dashboardpage? : DashboardPage ;
    constructor(page:Page){
        this.page = page;
    }

   

    getLoginPage(): LoginPage{
        if(!this.loginpage){
            this.loginpage = new LoginPage(this.page);
        }
        return this.loginpage;
    }

      getDashboardPage(): DashboardPage{
        if(!this.dashboardpage){
            this.dashboardpage = new DashboardPage(this.page);
        }
        return this.dashboardpage;
    }


    

}