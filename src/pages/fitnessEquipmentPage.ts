import { Page } from '@playwright/test';
import { FitnessEquipmentLocators } from '../helper/locators/fitnessEquipmentLocators'; // Adjust path as necessary

export class FitnessEquipmentPage {
  constructor(private page: Page) {}

  // Navigate to the base URL
  async navigate() {
    await this.page.goto("https://magento.softwaretestingboard.com/");
  }

  // Click on the "Gears" option
  async clickGears() {
    await this.page.locator(FitnessEquipmentLocators.gearsPage).click();
  }

  // Click on the "Fitness Equipment" option
  async clickFitnessEquipment() {
    await this.page.waitForSelector(FitnessEquipmentLocators.fit_equip);
    await this.page.locator(FitnessEquipmentLocators.fit_equip).click();
  }

  // const product_name = 'pageFitnessEquipmentLocators.sort_dropdown';
  // await age.selectOption(product_name, {value: "name"});

  // Sort the products by the given option
  async sortBy(optionText: string) {
    // Click on the dropdown to open it
    await this.page.waitForSelector(FitnessEquipmentLocators.sort_dropdown);
    await this.page.locator(FitnessEquipmentLocators.sort_dropdown).click();
    await this.page.selectOption('select#sorter', { value: 'name' });
    await this.page.selectOption('select#sorter', { value: 'price' });

    //await this.page.selectOption(product_name, {value: "name"});
  }
}

