//const{ test,expect} =require('@playwight/test')
import{test,expect} from'@playwright/test'
test('locators', async({page})=>{
await page.goto("https://www.demoblaze.com/")
// click on the login button -property 
await page.locator('#login2').click()
// another method
//await page.click('id=login2')
//provide username 
//await page.locator('#loginusername').fill("Moorthy")
await page.fill('#loginusername', 'moorthy')
await page.waitForTimeout(2000);
await page.fill("input[id='loginpassword']",'welcome@123')
await page.waitForTimeout(3000);
//click on login button
//await page.click("//onclick=logIn()")

})




