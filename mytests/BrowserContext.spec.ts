import { test, expect, Browser, Page } from '@playwright/test';
import { chromium } from 'playwright';

test("Bowser Context practice", async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    // Browser Context is a new context for the browser. It is like a new browser window.
    // It is used to create a new session for the browser. It is used to create a new context for the browser.
    // Allows to create multiple browser contexts in a single browser instance.
    // Each context can have its own cookies, local storage, and session storage.

    const browserContext1 = await browser.newContext();
    const page1: Page = await browserContext1.newPage();
    await page1.goto("https://practicetestautomation.com/practice-test-login/");

    const username = page1.locator("#username");
    const password = page1.locator("#password");
    const submit = page1.locator("#submit");

    await username.scrollIntoViewIfNeeded();
    await username.fill("student");
    await password.scrollIntoViewIfNeeded();
    await password.fill("Password123");
    await submit.scrollIntoViewIfNeeded();
    await submit.click();
    await page1.waitForTimeout(5000);


    const browserContext2 = await browser.newContext();
    const page2: Page = await browserContext2.newPage();
    await page2.goto("https://practicetestautomation.com/practice-test-login/");

    const username2 = page2.locator("#username");
    const password2 = page2.locator("#password");
    const submit2 = page2.locator("#submit");

    await username2.scrollIntoViewIfNeeded();
    await username2.fill("student");
    await password2.scrollIntoViewIfNeeded();
    await password2.fill("Password123");
    await submit2.scrollIntoViewIfNeeded();
    await submit2.click();
    await page2.waitForTimeout(5000);

    await browserContext1.close();
    await browserContext2.close();

    await browser.close();
});
