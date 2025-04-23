import {test, expect, Browser, Page} from '@playwright/test';
import {chromium} from 'playwright';

test('Checkboxes testing', async () => {

    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('https://practice-automation.com/form-fields/');

    // check if checkbox is checked
    const ch1 = page.getByTestId('drink1');
    await ch1.scrollIntoViewIfNeeded();
    
    // scroll down
    await page.evaluate(() => {
        window.scrollBy(0, 500); // scroll down 500 pixels
    });

    expect(await ch1.isChecked()).toBe(false);
    console.log(await ch1.isChecked()); // false

    // check the checkbox
    await ch1.check();
    expect(await ch1.isChecked()).toBe(true);
    console.log(await ch1.isChecked()); // true


    await page.waitForTimeout(5000); // wait for 5 seconds before closing the browser
    await browser.close();
    

});