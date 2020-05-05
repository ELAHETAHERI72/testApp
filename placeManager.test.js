const puppeteer = require('puppeteer');
const applicationConfig = require('./applicationConfig.js');


describe('placeManager Module Test', () => {
    // const app = new applicationConfig();

    test('myPlace', async() => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size= 2000 , 1080']

        });
        const page = await browser.newPage();
        // const app = new applicationConfig();
        await page.goto('file:///C:/Users/elahe/Desktop/userTest/index.html');
        const divManage = await page.$eval('#divManage', e => e.innerHTML);
        console.log(divManage);
        const arr = [];
        for (i in divManage) {
            const p = await page.$eval('p', e => e.innerHTML);
            console.log(divManage[i]);
            if (p != 'Quasi,') {
                console.log('error');
            }

        }

        // adsLocation.forEach(instans =>{
        //     if(instans !=قزوین){
        //         console.log('error');
        //     }
        // })







    }, 90000);


});