const puppeteer = require('puppeteer');

const url = 'https://www.cdiscount.com/telephonie/telephone-mobile/apple-iphone-12-64go-noir/f-144043129-ap0194252135525.html#mpos=0|cd';


(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: "networkidle2"});
})();