const puppeteer = require('puppeteer');
const nodemailer = require("nodemailer");
require('dotenv').config();


const url = 'https://www.cdiscount.com/telephonie/telephone-mobile/apple-iphone-12-64go-noir/f-144043129-ap0194252135525.html#mpos=0|cd';


const sendNotification = async (price) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "julien.azbrg@gmail.com",
            pass: process.env.MAIL_PASS,
        },
    });

    let info = await transporter
        .sendMail({
            from: '"PC Cdiscount" <julien.azbrg@gmail.com>',
            to: "fromscratch.frontdev@gmail.com",
            subject: "Prix sous les " + price + "€",
            html: "Le prix de la tour est de " + price + "€",
        })
        .then(() => console.log("Message envoyé"));
}


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

    //get <body>

    // let bodyHTML = await page.evaluate(() => document.body.innerHTML);
    // console.log(bodyHTML);

    // get specifics data

    let data = await page.evaluate(() => {
        return document.querySelector('span[itemprop=price]').innerText;
    })


    console.log(`Le prix est de ${data} et en arrondi c'est ${data.substring(0, 3)}`);

    if (parseInt(data.substring(0, 3)) > 850) {
        await sendNotification(data.substring(0, 3));
    }


    // await browser.close();
})();