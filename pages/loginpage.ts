import { expect,Page } from "@playwright/test";

export class LoginPage {
    page: Page;

    

    constructor(page: Page) {
        this.page = page;
    }

    //locators
    txtUsername = () => this.page.locator('[data-test="username"]');
    txtPassword = () => this.page.locator('[data-test="password"]');
    btnLogin = () => this.page.locator('[data-test="login-button"]');
    lblInvalidLogin = () =>  this.page.getByText('Epic sadface: Username and password do not match any user in this service'); 
    

    //actions
    public async gotoLoginPage(){
     await this.page.goto("https://www.saucedemo.com/");
    }

    public async enterUsername(){
     await this.txtUsername().fill("standard_user");
    }

    public async enterPassword(){
     await this.txtPassword().fill("secret_sauce");
    }

    public async clickLogin(){
     await this.btnLogin().click();
    }

    //login to the application
    public async logintoApp(username,password){
        await this.txtUsername().fill(username);
        await this.txtPassword().fill(password);
        await this.btnLogin().click();
    }

    public async assertInvalidLogin(){
        await expect(this.lblInvalidLogin()).toBeVisible();
    }



}

