import { Given, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { Page, Browser, chromium, expect } from '@playwright/test';
import { GearsPage } from '../../pages/gearsProductPage';

setDefaultTimeout(120000);

let browser: Browser;
let page: Page;
let gearsPage: GearsPage;

Given('User navigates to the demo test automation application', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  gearsPage = new GearsPage(page);
  await gearsPage.navigate();
});

Then('User selects the gears', async function () {
  await gearsPage.selectGears();
});

Then('User selects the product', async function () {
  await gearsPage.selectProduct();
});

Then('User selects the Customize and Add to Cart option', async function () {
  await gearsPage.selectCustomizeAndAddToCart();
});

Then('User selects ball size radio button', async function (ballSize: string) {
  await gearsPage.selectBallSize(ballSize);
});

Then('User selects the strap foot size radio button', async function (strapSize: string) {
  await gearsPage.selectStrapFootSize(strapSize);
});

// Then('User should be able to see the product price', async function (expectedPrice: string) {
//   const isPriceCorrect = await gearsPage.checkProductPrice(expectedPrice);
//   expect(isPriceCorrect).toBe(true);
// });

// Then('User adds the product to the cart', async function () {
//   await gearsPage.addProductToCart();
// });

// Then('The product should be added to the cart', async function () {
//   const isAdded = await gearsPage.isProductAddedToCart();
//   expect(isAdded).toBe(true);
// });

// Then('The cart should display the selected product with size', async function (ballSize: string) {
//   const isSizeVisible = await gearsPage.verifyProductSizeInCart(ballSize);
//   expect(isSizeVisible).toBe(true);
// });

// Then('The cart should display the strap foot size', async function (strapSize: string) {
//   const isSizeVisible = await gearsPage.verifyStrapFootSizeInCart(strapSize);
//   expect(isSizeVisible).toBe(true);
// });

// Then('The cart should display the selected product with the correct price', async function (price: string) {
//   const isPriceCorrect = await gearsPage.verifyProductPriceInCart(price);
//   expect(isPriceCorrect).toBe(true);
// });