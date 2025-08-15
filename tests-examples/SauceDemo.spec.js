import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

test("Test Case 1", async ({page})=>{
    const LP = new LoginPage(page);
    await LP.openApplication();
    await LP.loginToSauceDemo("standard_user","secret_sauce");
    
    const HP = new HomePage(page);
    const pageHeader = await page.locator(".app_logo").textContent();
    expect(pageHeader).toBe("Swag Labs")
    await HP.addToCart();
    await expect(await page.locator("#remove-sauce-labs-backpack")).toBeVisible();
    await HP.goToCart();
    await page.waitForTimeout(3000);
})