import { Page } from '@playwright/test';
import { GearsPageLocators } from '../helper/locators/gearsPageLocators';

export class GearsPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("https://magento.softwaretestingboard.com/");
  }

  async selectGears() {
    await this.page.locator(GearsPageLocators.gearsOption).click();
  }

  async selectProduct() {
    await this.page.locator(GearsPageLocators.gearsProduct).click();
  }

  async selectCustomizeAndAddToCart() {
    const element = this.page.locator(GearsPageLocators.customizeAndAddToCart);
      await element.scrollIntoViewIfNeeded();
      await this.page.waitForTimeout(5000); 
      await element.click();
  }

  async selectBallSize(ballSize: string) {
    await this.page.locator(GearsPageLocators.ballSize).click();

  }
  

  async selectStrapFootSize(strapSize: string) {
    //await this.page.locator(GearsPageLocators.strapSize).click();
    const element = this.page.locator(GearsPageLocators.strapSize);
    await element.scrollIntoViewIfNeeded();
    await element.waitFor({ state: 'visible' });
    await element.click();
  }

  // async checkProductPrice(expectedPrice: string): Promise<boolean> {
  //   const actualPrice = await this.page.locator(GearsPageLocators.productPrize).textContent();
  //   return actualPrice === expectedPrice;
  // }

  // async addProductToCart() {
  //   await this.page.locator(GearsPageLocators.addToCart).click();
  // }

  // async isProductAddedToCart() {
  //   return await this.page.locator(GearsPageLocators.selectedProduct).isVisible();
  // }

  // async verifyProductSizeInCart(size: string) {
  //   return await this.page.locator(`//span[contains(text(), '${size}')]`).isVisible();
  // }

  // async verifyStrapFootSizeInCart(size: string) {
  //   return await this.page.locator(`//span[contains(text(), '${size}')]`).isVisible();
  // }

  // async verifyProductPriceInCart(price: string): Promise<boolean> {
  //   const actualPrice = await this.page.locator(`//span[contains(text(), '${price}')]`).textContent();
  //   return actualPrice === price;
  // }
}