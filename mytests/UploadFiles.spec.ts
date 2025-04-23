import { test, expect, Browser, Page } from '@playwright/test';
import { chromium } from 'playwright';
import * as path from 'path';

test("Upload a Single File", async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();
    await page.goto("https://letcode.in/file");

    const uploadFile = page.locator(".file-input");
    await uploadFile.setInputFiles("C:\\Users\\brajolla\\Documents\\Buddeeswar.txt");


    await page.waitForTimeout(5000);
    await browser.close();

});

test('Upload Multiple Files', async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();
    await page.goto("https://letcode.in/file");
    await page.locator(".file-input").setInputFiles([

        path.join("C:\\Users\\brajolla\\Documents\\Buddeeswar.txt"),
        path.join("C:\\Users\\brajolla\\Documents\\Buddeeswar.txt"),
        path.join("C:\\Users\\brajolla\\Documents\\Buddeeswar.txt")
    ]);


});