const puppeteer = require('puppeteer');
require('dotenv').config();


const url = 'https://www.instagram.com/';


(async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: "networkidle2"});

    // await browser.close();

})();

