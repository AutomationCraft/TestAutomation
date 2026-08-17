import {test} from '@playwright/test';
// test('facebook', async({page})=>{
//   //playwright fully asynchronized  // goto url launch 
//   await page.goto('https://www.facebook.com/');
// });

test('playwright', async({page})=>{

  await page.goto('https://playwright.dev/')
  let url =await page.url()
  let title =await page.title()
  console.log(url);
  console.log(title);
  await page.goto('https://demoqa.com/')
 await page.goBack();
  await page.goForward();
  await page.reload();
  await page.waitForTimeout(3000);

  
});


