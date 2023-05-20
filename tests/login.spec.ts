import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { DashboardPage } from '../pages/dashboardpage';

test('Test_01: Login with valid credentials', async({page}) =>{

    const login = new LoginPage(page);
    const dasboardpage = new DashboardPage(page);
    await login.gotoLoginPage();
    await login.logintoApp("standard_user","secret_sauce");
    await dasboardpage.assertValidLogin();

});

test("Test_02: Check whether when user logged in with incorrect username and password it will show an error", async({page, baseURL}) => {
    const login = new LoginPage(page); 
    await login.gotoLoginPage();
    await login.logintoApp("Admin","123");
    await login.assertInvalidLogin();
 });



