const puppeteer = require('puppeteer');

const url = 'https://www.cdiscount.com/telephonie/telephone-mobile/apple-iphone-12-64go-noir/f-144043129-ap0194252135525.html#mpos=0|cd';


(async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: "networkidle2"});


    //Instructions

    await page.setViewport({
        width: 1200,
        height: 800
    });

    //pdf   => pour les pdf on doit mettre "launch(headleass:true)"
    await page.pdf({
        path: 'page.pdf',
        format: 'a4'
    })

    //image
    await page.screenshot({
        path: 'image.png',
    })


    // await browser.close();
})();