// // import { test, chromium } from "@playwright/test";

// // test("launch browser", async () => {
// //   const browser = await chromium.launch(); // sme variable ah contect ah podra . athuku name
// //   const context1 = await browser.newContext({
// //     recordVideo: { dir: "/video" },
// //   });

// //   const page1 = await context1.newpage();
// //   await page1.goto("https://playwright.dev/");
// //   await page1;

// //   const context2 = await browser.newContext({
// //     recordVideo: { dir: "/video" },
// //   });
// //   const page2 = await context2.newPage();
// //   const page3 = await context3.newPage();
// //   await page2.goto("https://demoqa.com/"); // browser lanuc
// //   await page3.goto("https://www.facebook.com/");
// //   await page3.waitForTimeout(4000);
// // });

// // import{test,chromium} from '@playwright/test'

// // test ('launch browser', async()=>{

// // const browser=await chromium.launch();
// // const context = await browser.newContext();
// // const page=await context.newpage();

// //  await page.goto('https://www.testautomationcentral.com/')
// // await page.locator('//button[@data-target="multi-select-dropdown"]').click();
// // await page.selectOption('//option[@value="option1"]')
// // await page.waitforTimeout(4000);

// //  })

// import { test } from '@playwright/test';

// // Playwright handles browser context setup and teardown automatically:
// test('launch browser', async ({ page }) => {
//   await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');
//   await page.locator('//button[@data-target="multi-select-dropdown"]');
//   await page.selectOption('//select[@class="form-multiselect block w-full mt-1"]',['Option 1','Option 3']);
//   await page.waitForTimeout(3000);
// });

import { test, chromium } from "@playwright/test";
test("lanuch browser", async ({}) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.testautomationcentral.com/demo/dropdown.html");
  await page.locator('//button[@data-target="multi-select-dropdown"]').click();
  await page.selectOption('//div[@class="tab-content active"]', [" Option 1"]);

  // await page.goto("https://www.testautomationcentral.com/demo/dropdown.html");
  // await page.locator('//button[@data-target="multi-select-dropdown"]').click();
  await page.waitForTimeout(2000);
});
