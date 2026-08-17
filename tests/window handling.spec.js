 import{test, expect} from'@playwright/test'
 test( 'web table ', async({page})=>{
await page.goto(" https://www.amazon.in/");
 await page.waitForTimeout(3000);
 await page.getByRole ('link',{name:'/Account & Lists'}).hover();
 const options = page.locator('#nav-al-container');
 const texts = await options.allInnerTexts();
 console.log(texts);

 })