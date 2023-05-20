import { expect,Page } from "@playwright/test";

export class DashboardPage {
    page: Page;


    constructor(page: Page) {
        this.page = page;
    }

    //locators
    lblDashboard = () => this.page.getByText('Products');


    //actions
    public async assertValidLogin(){
        await expect(this.lblDashboard()).toBeVisible();
    }


}

