const puppeteer = require('puppeteer');
const applicationConfig = require('./applicationConfig.js');


describe('Authentication Module Test', () => {
    const app = new applicationConfig();

    test('Login', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size=1920 , 1080']

        });
        const page = await browser.newPage();
        const app = new applicationConfig();
        await page.goto(app.serverAddress + '/auth/login');
        await page.waitForSelector('form');
        await page.click('#username');
        await page.type('#username', 'farazjalili@gmail.com');
        await page.click('#password');
        await page.type('#password', '12345678');
        await page.click('button[type = submit]');
        await page.waitFor('button[type = submit]');   

        const url = await page.mainFrame().url();
        expect(url).toContain('ads'); // Uses Jest
        await browser.close();

    }, app.delay);

    test('Login - Wrong User', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size=1920 , 1080']

        });
        const page = await browser.newPage();
        const app = new applicationConfig();
        await page.goto(app.serverAddress + '/auth/login');
        await page.waitForSelector('form');
        await page.click('#username');
        await page.type('#username', 'el.taheri.72@gmail.com');
        await page.click('#password');
        await page.type('#password', '12345678');
        await page.click('button[type = submit]');

        await page.waitForSelector('.Toastify__toast-body');
        const html = await page.$eval('.Toastify__toast-body', el => el.innerHTML);

        expect(html).toBe('نام کاربری یا رمزعبور اشتباه است.');
        await browser.close();

    }, app.delay);
    test('Register', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size=1920 , 1080']

        });
        const page = await browser.newPage();
        await page.goto(app.serverAddress + '/auth/register');
        await page.click('#username');
        await page.type('#username', 'elahe.ta.72@gmail.com');
        await page.click('button[type=submit]');
        await page.waitFor('button[type=submit]');
        const url = await page.mainFrame().url();
        
    }, app.delay);

    test('Rest Password', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size=1920 , 1080']

        });
        const page = await browser.newPage();
        await page.goto(app.serverAddress + '/auth/resetpassword');
        await page.click('#username');
        await page.type('#username', 'farazjalili@gmail.com');
        await page.click('button[type=submit]');
        await page.waitFor('button[type=submit]');
        await page.click('#password');
        await page.type('#password', '12345678');
        await page.click('#confirmPassword');
        await page.type('#confirmPassword', '12345678');
        await page.click('button[type=submit]');
        const url = page.mainFrame.url();
        expect(url).toContain('login');
        await browser.close();

    }, app.delay);


});
