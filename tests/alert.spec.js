import {test} from'@playwright/test'

test ('DOM Popup',async({page})=>{
    await page.goto("https://www.makemytrip.com/");


    try{

        await page.waitForSelector('//input[@class="font14 fullWidth"]');
        await page.locator('//input[@class="font14 fullWidth"]').fill('9884144341');
        await page.waitForTimeout(4000);


        
    } 
    

    catch{

    }
    



});
