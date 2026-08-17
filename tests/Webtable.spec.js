import {test, expect} from'@playwright/test'
 test (' web_table',async({page})=>{

    await  page.goto('https://demoqa.com/webtables');
    await page.locator('//button[@id="addNewRecordButton"]').click();
    await page.waitForTimeout(3000);
    await page.locator('[id="firstName"]').fill("Moorthy",  {delay:1000});
    await page.locator('[id="lastName"]').fill("Mac");
    await page.locator('[id="userEmail"]').fill('moorthy@13getMaxListeners.com', {delay:1000});
    await page.locator('//input[@placeholder="Age"]').fill('26');
    await page.locator('//input[@placeholder="Salary"]').fill('8000');
    await page.locator('[id="department"]').fill('Testing', {delay:1000});
    await page.locator('[id="submit"]').click()
    await page.waitForTimeout(4000);
    await page.screenshot({path:'ss.png'});

// const data= await page.locator ("table tbody td");



 });


// import {test} from'@playwright/test'
// test ('web_table', async({})={


// const users = [
//     {
//         firstName: 'Moorthy',
//         lastName: 'Mac',
//         email: 'moorthy1@example.com',
//         age: '26',
//         salary: '8000',
//         department: 'Testing'
//     },
    
// ];

// for (const user of users) {

//     await page.locator('#addNewRecordButton').click();

//     await page.locator('#firstName').fill(user.firstName);
//     await page.locator('#lastName').fill(user.lastName);
//     await page.locator('#userEmail').fill(user.email);
//     await page.locator('input[placeholder="Age"]').fill(user.age);
//     await page.locator('input[placeholder="Salary"]').fill(user.salary);
//     await page.locator('#department').fill(user.department);

//     await page.locator('#submit').click();
// }

// })
