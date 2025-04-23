import { test, expect, Browser, Page, BrowserContext } from '@playwright/test';
import { chromium } from 'playwright';

test("Dropdown test", async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const browserContext: BrowserContext = await browser.newContext();

    const page: Page = await browserContext.newPage();

    await page.goto("https://letcode.in/dropdowns");

    const fruitsDropdown = page.locator('#fruits');
    // getting selected option from the dropdown
    const selectedOption = await page.locator('#fruits option:checked').textContent();
    console.log(selectedOption);
    // select by label
    await fruitsDropdown.selectOption({ label: "Orange" });
    console.log(await page.locator('#fruits option:checked').textContent());
    await page.waitForTimeout(3000);
    // select by value
    await fruitsDropdown.selectOption({ value: "4" });

    const selectedOption1 = await page.locator('#fruits option:checked').textContent();
    console.log(selectedOption1);
    await page.waitForTimeout(3000);

    // select by index
    await fruitsDropdown.selectOption({ index: 1 });
    console.log(await page.locator('#fruits option:checked').textContent());


    await page.waitForTimeout(5000);
    await browserContext.close();
    await browser.close();


});
test("Another Dropdown Test",async()=>{
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const browserContext: BrowserContext = await browser.newContext();

    const page: Page = await browserContext.newPage();

    await page.goto("https://letcode.in/dropdowns");

    const langDropdown= page.locator('#lang');
    const allOptions = await page.$$('#lang option');
    
    // getting all the options from the dropdown
    for(const option of allOptions){
        console.log(await option.textContent());
    }

});
