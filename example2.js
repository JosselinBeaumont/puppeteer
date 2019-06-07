const puppeteer = require('puppeteer');

puppeteer.launch({headless: false}).then(async browser => {
// puppeteer.launch().then(async browser => {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.aymen-loukil.com');

    // await browser.close();
});
