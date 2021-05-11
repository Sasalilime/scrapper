const puppeteer = require('puppeteer');
require('dotenv').config();


const url = 'https://www.instagram.com/';


(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: "networkidle2"});

    //cookie
    await page.click('._1XyCr > button');

    //login
    await page.type('[name=username]', 'salimtison@gmail.com', {
        delay: 100
    });
    await page.type('[name=password]', 'kaka12', {
        delay: 100
    });
    await page.click('button[type=submit]');

    //autoconnect
    // await page.waitForSelector('._1Xy445- > button', {visible: true})
    // await page.click('._1Xy445- > button');

    //notifications (ACTIVED)
    // await page.waitForSelector('.mt3GC > button', {visible: true})
    // await page.click('.mt3GC > button');

    //notifications (ACTIVED)
     await page.waitForSelector('.mt3GC > button:nth-child(2)', {visible: true})
     await page.click('.mt3GC > button');


   // await browser.close();

})();

