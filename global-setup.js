import {chromium,expect} from '@playwright/test';

async function globalSetup(){

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    //Login to application
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading')).toContainText('Dashboard');

    //Saving the authentication file 
    await page.context().storageState({path: "./playwright/.auth/auth.json"});
}

export default globalSetup;