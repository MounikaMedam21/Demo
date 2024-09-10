import { BeforeAll, AfterAll, Before, After } from "@cucumber/cucumber";
import { chromium, Page, Browser, BrowserContext } from "@playwright/test";

let page: Page;
let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    // Launch browser once before all tests
    browser = await chromium.launch({ headless: false }); 
});

Before(async function () {
    // Create a new browser context and page before each scenario
    context = await browser.newContext();
    page = await context.newPage();
});

After(async function () {
    // Close page and context after each scenario
    await page.close();
    await context.close();  
});

AfterAll(async function () {
    // Close the browser once after all tests
    await browser.close();
});
