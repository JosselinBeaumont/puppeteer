const puppeteer = require('puppeteer');
const CronJob = require('cron').CronJob;
const job = new CronJob({

// runs every monday
                            cronTime: '4 16 35 * *',   onTick: function() {

        (async () => {   const browser = await puppeteer.launch({headless:false, slowMo: 100});
            const page = await browser.newPage();

            //Go to my page and wait until the page loads
            await page.goto('https://www.aymen-loukil.com/en/contact-aymen/', {waitUntil: 'networkidle2'});
            // await page.waitForSelector('#genesis-content > article > header > h1');

//type the name
            await page.focus('#wpcf7-f671-p311-o1 > form > p:nth-child(2) > label > span > input');
            await page.keyboard.type('Super Jojo Bot !!');

//type the email
            await page.focus('#wpcf7-f671-p311-o1 > form > p:nth-child(3) > label > span > input');
            await page.keyboard.type('superJojoBot@email.com');

//type the message
            await page.focus('#wpcf7-f671-p311-o1 > form > p:nth-child(5) > label > span > textarea');
            await page.keyboard.type("Hello Aymen ! It is me your Jojo, i test your contact form !");

//Click on the submit button
            await page.click('#wpcf7-f671-p311-o1 > form > p:nth-child(6) > input');
            await page.screenshot({ path: 'form.png', fullPage: true }); })();


    },  start: false,   timeZone: 'Europe/London' }); job.start();
