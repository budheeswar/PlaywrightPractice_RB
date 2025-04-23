import { test, expect, Browser, Page } from '@playwright/test';
import { time } from 'console';
import { chromium } from 'playwright';


test("Locators practice", async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();
    await page.setDefaultTimeout(10000);
    await page.goto("https://letcode.in/edit");
    // locator by id
    const fullNameElement = page.locator("#fullName");
    await fullNameElement.fill("Buddeeswar R");

    // locator by class name
    const header = page.locator(".label").first();
    console.log(await header.textContent());

    // text locator
    const text = page.locator("text=What is inside the text box");
    console.log(await text.textContent());

    expect(await text.textContent()).toBe("What is inside the text box");

    // css selector
    // const value =page.locator("[value='I am good']");
    // console.log(await value.textContent());
    // expect(await value.textContent()).toBe("I am good");

    //xpath selector
    const value = page.locator("//label[text()='Clear the text']");
    console.log(await value.textContent());
    expect(await value.textContent()).toBe("Clear the text");


    await page.waitForTimeout(5000);
    await browser.close();



});