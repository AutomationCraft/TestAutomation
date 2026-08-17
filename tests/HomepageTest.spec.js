//for example to mort we need to us this to check an  two thing is (requires one is test and other one is expect)
// const {test, expect}= require('@playwright/test') 
const {test,expect} = require ('@playwright/test');

test('Home page',async ({page})=>{
await page.goto("https://demoblaze.com/");

const pageTitle =await page.title();
console.log("page title is:",pageTitle);

await expect(page).toHaveTitle('STORE');

const pageURL=page.url();
console.log ('page URL is;',pageURL);

await expect(page).toHaveURL('https://demoblaze.com/');

await page.close();
});


