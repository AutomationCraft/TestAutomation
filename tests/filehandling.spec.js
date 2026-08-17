//set input files 

import{test} from'@playwright/test'

test('upload',async({page})=>{
await page.goto("https://www.file.io/");
const  fileInput =page.locator('#select-files-input');
await page.setInputFiles('#select-files-input','C:/Users/HP/OneDrive/Documents/resume 07-31-2026/resume 01-08-2026.pdf');



});