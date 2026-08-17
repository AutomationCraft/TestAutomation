import { test } from "@playwright/test";

test("find minimum price product", async ({ page }) => {
  // Open Myntra
  await page.goto("https://www.myntra.com/");

  // Open the required category
  await page.locator('//*[@data-reactid="333"]').hover();
  await page.locator('//a[@data-reactid="345"]').click();

  await page.waitForLoadState("domcontentloaded");

  
  async function getPrices() {
    const products = page.locator('//li[@class="product-base"]');

    const count = await products.count();

    const prices = [];

    for (let i = 0; i < count; i++) {
      const product = products.nth(i);

      const discountedPrice = product.locator(".product-discountedPrice");

      let priceText;

      if ((await discountedPrice.count()) > 0) {
        priceText = await discountedPrice.textContent();
      } else {
        priceText = await product
          .locator('xpath=.//div[@class="product-price"]/span')
          .textContent();
      }

      const price = Number(priceText.replace(/[^0-9]/g, ""));

      prices.push(price);
    }

    return prices;
  }

  
  function getMinimumPrice(prices) {
    return Math.min(...prices);
  }

  
  async function getProductName(minPrice) {
    const productName = page.locator(
      `//li[@class="product-base"]` +
        `/descendant::div[@class="product-price"]/span[` +
        `span[@class="product-discountedPrice" and text()="${minPrice}"]` +
        `or (text()="${minPrice}" and not(@class))` +
        `]/ancestor::div[@class="product-productMetaInfo"]/h3`,
    );

    return await productName.first().textContent();
  }

  
  
  const prices = await getPrices();

  console.log("All Prices:", prices);

  
  const minPrice = getMinimumPrice(prices);

  console.log("Minimum Price:", minPrice);

  
  const productName = await getProductName(minPrice);

  console.log("Minimum Price Product:", productName);
});
