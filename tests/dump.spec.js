import {test,expect} from "@playwright/test";

test('Test',async({page})=>{
    page.goto('https://www.saucedemo.com');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator("#login-button").click();
    await page.waitForTimeout(2000);
    const products = await page.$$("//div[@class='inventory_item_label']//a//div");
    console.log(products.length);
    for(let product of products){
        console.log(await product.textContent());
    }
    await page.waitForTimeout(3000);
    console.log("1st change");
})