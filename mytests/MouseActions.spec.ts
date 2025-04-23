import { test, expect, Browser, Page } from '@playwright/test';
import { chromium } from 'playwright';

test('Mouse Hover Testing', async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();

    await page.goto('https://the-internet.herokuapp.com/hovers');

    // Hover over the first image
    const firstImage = page.locator('.figure img').first();
    await firstImage.hover();
    await page.waitForTimeout(2000);

    page.screenshot({ path: "hovered_image.png" });
    await page.waitForTimeout(2000); // Wait for 2 seconds to see the hover effect

    const info = page.locator("//*[text()='name: user1']");
    expect(await info.textContent()).toBe("name: user1");
    console.log(await info.textContent());

    await browser.close();
});

test('Double click Testing', async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();

    await page.goto('https://demoqa.com/buttons');

    // Double click on the first row of the table
    const dblClickBtn = page.locator("#doubleClickBtn");
    await dblClickBtn.dblclick();
    // Wait for 2 seconds to see the double click effect

    const message = page.locator("#doubleClickMessage");
    await message.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    expect(await message.textContent()).toBe("You have done a double click");

    console.log(await message.textContent());

    await browser.close();

});
test('Right click Testing', async () => {

    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();

    await page.goto('https://demoqa.com/buttons');

    // Right click on the first row of the table
    const rightClickBtn = page.locator("#rightClickBtn");
    await rightClickBtn.click({ button: 'right' });
    // Wait for 2 seconds to see the right click effect
    await page.waitForTimeout(2000);
    const message = page.locator("#rightClickMessage");
    await message.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    expect(await message.textContent()).toBe("You have done a right click");
    console.log(await message.textContent());



    await browser.close();

});