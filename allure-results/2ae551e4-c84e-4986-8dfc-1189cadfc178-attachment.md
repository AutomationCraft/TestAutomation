# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: employee-test.spec.js >> emp data validating
- Location: tests\employee-test.spec.js:3:5

# Error details

```
Error: ENOENT: no such file or directory, open 'C:\Users\HP\OneDrive\Documents\Playwright_Automation_Vscode\employee-test.json'
```

# Test source

```ts
  1  | import {test,expect} from'@playwright/test'
  2  | import fs from 'fs'
  3  | test ('emp data validating', async({page})=>{
> 4  |     const fileContent = fs.readFileSync('./employee-test.json','utf-8');
     |                            ^ Error: ENOENT: no such file or directory, open 'C:\Users\HP\OneDrive\Documents\Playwright_Automation_Vscode\employee-test.json'
  5  |     const emp =JSON.parse(fileContent);
  6  |     console.log(emp);
  7  | 
  8  |     // read second mobile number ;
  9  | 
  10 |     const   mobile2number =emp.phone.mobile2;
  11 |     console.log('second mobile number:',mobile2number);
  12 | 
  13 | // verify that skillset contains API testing
  14 |   expect(emp.skills).toContain('api_testing');
  15 | });
```