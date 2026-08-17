import { test } from "@playwright/test";
test("keyboard_action", async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  
  
await page.locator('//input[@placeholder="Search Amazon.in"]').fill("iphone17");
   await page.getByPlaceholder('Search Amazon.in').fill("macbookpro");

 //await page.getByRole('searchbox').type('iphone pro max17', {delay:1000});
//   //await page.getByRole('searchbox').type('iphone pad 10 gen ',{delay:1000});

//   await page.waitForTimeout(4000);


// });

//  import { test } from "@playwright/test";
// test("Drag_Drop", async ({ page }) => {
//  await page.goto("https://jqueryui.com/droppable/");
//  const frame = page.frameLocator(".demo-frame");
//  await frame.locator('#draggable').dragTo(frame.locator('#droppable'));
//  await page.waitForTimeout(3000);

})