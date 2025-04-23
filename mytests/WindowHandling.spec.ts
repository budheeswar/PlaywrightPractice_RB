import {test, expect, Browser, Page} from '@playwright/test';
import {chromium} from 'playwright';

test("Test New Tab", async () => {
   const browser: Browser = await chromium.launch({ headless: false});
    const context = await browser.newContext();
    const page: Page = await context.newPage();

    await page.goto('https://practice-automation.com/window-operations/');

    const [newPage] = await Promise.all([
        context.waitForEvent('page'), // wait for the new tab to open
        page.locator("[onclick='newTab()']").click() // click the link that opens a new tab
    ]);
    await newPage.waitForLoadState('domcontentloaded'); // wait for the new tab to load
    console.log(await newPage.title()); // print the title of the new tab
    newPage.goto('https://google.com'); 
    await newPage.waitForLoadState('domcontentloaded'); // wait for the new tab to load

    // Multi tabs handling
    const pages = context.pages(); // get all pages in the context
    console.log(`Number of pages: ${pages.length}`); // print the number of pages in the context
    const originalPage = pages[0]; // get the original page
    await originalPage.bringToFront(); // bring the original page to the front
    console.log(`Original page title: ${await originalPage.title()}`); // print the title of the original page  
    
    
    await originalPage.waitForTimeout(5000);
    //await newPage.waitForTimeout(5000); // wait for 2 seconds before closing the new tab
    


    await context.close(); // close the context to close all pages in it
    await browser.close(); // close the browser

});