import { test } from "@playwright/test";
test("test1", async ({ page }) => {
  await page.goto("https://demoqa.com/text-box");
  console.log(" I am in the page 1");
});

test("test2", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  console.log(" I am in the Test 2");
  console.log("Iam in the test 3");
});
