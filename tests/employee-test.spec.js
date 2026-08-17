import {test,expect} from'@playwright/test'
import fs from 'fs'
test ('emp data validating', async({page})=>{
    const fileContent = fs.readFileSync("./employee-test.json","utf-8");
    const emp =JSON.parse(fileContent);
    console.log(emp);

    // read second mobile number ;

    const   mobile2number =emp.phone.mobile2;
    console.log('second mobile number:',mobile2number);

// verify that skillset contains API testing
  expect(emp.skills).toContain('api_testing');
});