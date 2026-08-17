import {test,expect} from '@playwright/test'
 test ('browser_ validate', async({page})=>{

    await page.goto("https://demoqa.com/text-box");
    await expect(page.locator("#userName")).toBeEditable();
    await expect(page.locator("#userName")).fill('moorthy');
    await expect(page.locator("userName")).toHaveValue("Moorthy");
    await page.waitForTimeout(5000);


 });