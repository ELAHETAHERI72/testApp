const puppeteer = require('puppeteer');
const applicationConfig = require('./applicationConfig.js');


describe('placeManager Module Test', () => {
    const app = new applicationConfig();

    test('myPlace', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size= 2000 , 1080']

        });
        const page = await browser.newPage();
        const app = new applicationConfig();
        await page.goto(app.serverAddress + '/auth/login');
        await page.waitForSelector('form');
        await page.click('#username');
        await page.type('#username', 'moshfeghi');
        await page.click('#password');
        await page.type('#password', '123456789');
        await page.click('button[type = submit]');
        await page.waitFor('button[type = submit]');
        // const inputvalue = await page.$eval('#react-select-2-input',e=>e.value);
        const adsLocation = await page.$eval('p.dJGqIF', e => e.innerHTML);
        console.log(adsLocation);
        // adsLocation.forEach(instans =>{
        //     if(instans !=قزوین){
        //         console.log('error');
        //     }
        // })

        

        

       

    }, app.delay);


});
