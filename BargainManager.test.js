const puppeteer = require('puppeteer');
const applicationConfig = require('./applicationConfig.js');
// app.serverAddress + 

describe('Bargaining Module Test', () => {
    const app = new applicationConfig();

    test('bargaining', async() => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size= 2000 , 1080']

        });
        const page = await browser.newPage();
        const app = new applicationConfig();
        await page.goto(app.serverAddress + '/auth/login');
        // await page.waitForSelector('form');
        await page.click('[data-testid="loginUsername"]');
        await page.type('[data-testid="loginUsername"]', 'moshfeghi');
        await page.click('[data-testid="loginPassword"]');
        await page.type('[data-testid="loginPassword"]', '123456789');
        await page.click('[data-testid="loginSubmit"]');
        await page.waitFor('[data-testid="loginSubmit"]');
        await page.waitFor(2000);
        await page.waitForSelector('div.iaYNOa > div:nth-of-type(9)');
        await page.click('div.iaYNOa > div:nth-of-type(11)');
        await page.waitForSelector('[data-testid="adDetailBargain"]');
        await page.click('[data-testid="adDetailBargain"]');
        await page.waitForSelector('#suggestedPrice');
        const cost = await page.$eval('#suggestedPrice', e => e.innerHTML);
        if (cost >= 1100000000 && cost <= 1600000000) {
            await page.click('#getContactButton');
        }


    }, app.delay);


});