// import {test} from '@playwright/test'
// test ("js Alerts", async({page})=>{
//     await page.goto('https://demoqa.com/alerts');
//     page.on('dialog',(dialog)=>{
//         console.log(dialog.message());
//     })

import {test} from '@playwright'
test ('DOM Popup', async({page})=>{

await page.goto("https://www.makemytrip.com/");
})
