import { test as Basetest , expect} from "@playwright/test";
import { PageObjectManagers } from "../objectManagers/ui-objectmanagers";

type MyFixtures = {
     PageObjects : PageObjectManagers;
}
export const test = Basetest.extend<MyFixtures>({
     PageObjects : async({page}, use) =>{
        await use(new PageObjectManagers(page));
     } 
});

export {expect}
