const puppeteer = require('puppeteer');
const applicationConfig = require('./applicationConfig.js');

describe('checkprofileManager', () => {
    const app = new ApplicationConfig();
    // app.serverAddress + 
    // http://185.8.173.146:7070/auth/login
    // http://127.0.0.1/auth/login
    test('checkProfile', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size=1920 , 1080']

        });
        const page = await browser.newPage();
        await page.goto(app.serverAddress + '/auth/login');
        await page.waitForSelector('form');
        await page.click('#username');
        await page.type('#username', 'farazjalili@gmail.com');
        await page.click('#password');
        await page.type('#password', '12345678');
        await page.click('button[type = submit]');
        await page.waitFor('button[type = submit]');
        /////////////////////////////
        await page.waitFor(2000);
        await page.waitForSelector('div.iaYNOa > div:nth-of-type(11)');
        await page.click('div.iaYNOa > div:nth-of-type(11)');
        await page.waitForSelector('.dqNFUD> img');
        await page.click('.dqNFUD > img');
        const imgSrc = await page.$$eval('.hKRrWs > img[data-src]', imgs => imgs.map(img => img.getAttribute('data-src')));
        console.log(imgSrc);
        expect(src).toBe('http://185.8.173.146:8000/media/users/4.jpg');
        const username = await page.$eval('p.sc-bxivhb',e => e.innerHTML);
        expect (username).toBe('OAG');
    }, app.delay)
})



