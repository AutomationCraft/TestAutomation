import {test} from'@playwright/test'

test('minmum  price',async({page})=>{
 await page.goto("https://www.myntra.com/boy-tshirts");

   const priceLocator = page.locator("//li[@class='product-base']/descendant::span[@class='product-discountedPrice']");
  const nameLocator = page.locator("//li[@class='product-base']/descendant::h3[@class='product-brand']");

  const priceTexts = await priceLocator.allTextContents();
  const nameTexts = await nameLocator.allTextContents();

  console.log('Raw price texts:', priceTexts);   

  const prices = priceTexts.map(text => Number(text.replace(/[^0-9.]/g, '')));

  console.log('Cleaned prices:', prices);          

  const minPrice = Math.min(...prices);
  const minIndex = prices.indexOf(minPrice);
  
  const minProductName = nameTexts[minIndex];

  console.log('Minimum Price:', minPrice);
  console.log('Product Name:', minProductName);

});

 

