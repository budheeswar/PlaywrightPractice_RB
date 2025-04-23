import {test, expect, Browser, Page} from '@playwright/test';
import {chromium} from 'playwright';

test('Simple Alert', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('https://letcode.in/alert');

    const simpleAlert = page.locator("#accept");
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        expect(dialog.message()).toBe('Hey! Welcome to LetCode');
        await page.waitForTimeout(2000);
        await dialog.accept();
    })
    await simpleAlert.click();
   

    await page.waitForTimeout(4000);
    await browser.close(); 
   
});
test('Confirm Alert', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('https://letcode.in/alert');

    const confirmAlert = page.locator("#confirm");
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        expect(dialog.message()).toBe('Are you happy with LetCode?');
        await page.waitForTimeout(2000);
        await dialog.dismiss();
    })
    await confirmAlert.click();
   

    await page.waitForTimeout(4000);
    await browser.close(); 
   
});
test('Prompt Alert', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('https://letcode.in/alert');

    const promptAlert = page.locator("#prompt");
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        expect(dialog.message()).toBe('Enter your name');
        await page.waitForTimeout(2000);
        await dialog.accept('John Doe');
    })
    await promptAlert.click();
   

    await page.waitForTimeout(4000);
    await browser.close(); 
   
});