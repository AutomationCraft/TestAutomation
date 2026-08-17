import{test} from '@playwright/test'
test('Iframes', async({page})=>{

    await  page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
    let  Iframes2 = await page.frameLocator("");

});