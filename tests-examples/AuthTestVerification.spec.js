import { test, expect } from '@playwright/test';

test('Test1', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('link', { name: 'Time' }).click();
    await expect(page.getByRole('banner')).toContainText('TimeTimesheets');
    await page.waitForTimeout(2000);

})