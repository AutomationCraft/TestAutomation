import { test } from '@playwright/test';

test('min_price', async ({ page }) => {

    await page.goto("https://www.myntra.com/");

    await page.locator('//*[@data-reactid="333"]').hover();
    await page.locator('//a[@data-reactid="345"]').click();

    await page.waitForTimeout(5000);

    // Locate all product cards
    const products = page.locator(
        '//li[@class="product-base"]'
    );

    const count = await products.count();

    let prices = [];

    // Extract prices
    for (let i = 0; i < count; i++) {

        const product = products.nth(i);

        const discountedPrice = product.locator(
            '.product-discountedPrice'
        );


        let priceText;

        if (await discountedPrice.count() > 0) {

            priceText = await discountedPrice.textContent();

        } else {

            priceText = await product.locator(
                '//div[@class="product-price"]/span'
            ).textContent();
        }

        const price = Number(
            priceText.replace(/[^0-9]/g,'')
        );

        prices.push(price);
    }
    
    // Find minimum price
    const minPrice = Math.min(prices);

    await page.waitForTimeout(4000);

    // Myntra's exact XPath
    const minProductName = page.locator(
       '//li[@class="product-base"]/descendant::div[@class="product-price"]/span[span[@class="product-discountedPrice" and text() = "${minPrice}"] or (text() = "${minPrice}" and not (@class))]/ancestor::div[@class="product-productMetaInfo"]/h3');


       
   //spec // Print ONLY minimum price and product name
    console.log("Minimum price:", minPrice);

    console.log(
        "Minimum price product:",
        await minProductName.first().textContent()
    );

});
