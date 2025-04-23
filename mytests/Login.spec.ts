import { test, expect, Browser, Page } from '@playwright/test';
import { chromium } from 'playwright';

test("Login Test", async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    // locators
    const username = page.locator("#username");
    const password = page.locator("#password");
    const submit = page.locator("#submit");

    await username.scrollIntoViewIfNeeded();
    await username.fill("student");
    await password.scrollIntoViewIfNeeded();
    await password.fill("Password123");
    await submit.scrollIntoViewIfNeeded();
    await submit.click();

    const message: string = await page.title();
    console.log(message);
    expect(message).toBe("Logged In Successfully | Practice Test Automation");
    await page.screenshot({ path: "Login.png" });
    await browser.close();



});