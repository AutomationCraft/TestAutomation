import { test } from '@playwright/test';

test('min_price', async ({ page }) => {

    await page.goto("https://www.myntra.com/");

    await page.locator('//*[@data-reactid="333"]').hover();

    await page.locator('//a[@data-reactid="345"]').click();

    await page.waitForTimeout(5000);


    // Function 1: Get all product prices
    async function getPrices() {

        const products = page.locator(
            '//li[@class="product-base"]'
        );

        const count = await products.count();

        let prices = [];

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
                    'xpath=.//div[@class="product-price"]/span'
                ).textContent();
            }

            const price = Number(
                priceText.replace(/[^0-9]/g, '')
            );

            prices.push(price);
        }

        return prices;
    }


    // Function 2: Find minimum price
    function getMinimumPrice(prices) {

        return Math.min(...prices);
    }


    // Function 3: Find product name using price parameter
    async function getProductName(minPrice) {

        const minProductName = page.locator(
            `//li[@class="product-base"]/descendant::div[@class="product-price"]/span[
                span[@class="product-discountedPrice" and text() = "${minPrice}"]
                or
                (text() = "${minPrice}" and not(@class))
            ]/ancestor::div[@class="product-productMetaInfo"]/h3`
        );

        return await minProductName.first().textContent();
    }


    // Call Function 1
    const prices = await getPrices();

    console.log("All Prices:", prices);


    // Call Function 2
    const minPrice = getMinimumPrice(prices);

    console.log("Minimum Price:", minPrice);


    // Call Function 3 and pass minPrice as parameter
    const productName = await getProductName(minPrice);

    console.log("Minimum Price Product:", productName);

});