const puppeteer = require('puppeteer');
const applicationConfig = require('./applicationConfig.js');


describe('Authentication Module Test', () => {
    const app = new applicationConfig();
    // app.serverAddress + '/auth/login'

    test('Login', async() => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size=1920 , 1080']

        });
        const page = await browser.newPage();
        const app = new applicationConfig();
        await page.goto(app.serverAddress + '/auth/login');
        await page.waitForSelector('form');
        await page.click('[data-testid="loginUsername"]');
        await page.type('[data-testid="loginUsername"]', 'farazjalili@gmail.com');
        await page.click('[data-testid="loginPassword"]');
        await page.type('[data-testid="loginPassword"]', '12345678');
        await page.click('[data-testid="loginSubmit"]');

        const url = await page.mainFrame().url();
        expect(url).toContain('ads'); // Uses Jest
        await browser.close();

    }, app.delay);

    test('Login - Wrong User', async() => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size=1920 , 1080']

        });
        const page = await browser.newPage();
        const app = new applicationConfig();
        await page.goto(app.serverAddress + '/auth/login');
        await page.click('[data-testid="loginUsername"]');
        await page.type('[data-testid="loginUsername"]', 'ta.e@gmail.com');
        await page.click('[data-testid="loginPassword"]');
        await page.type('[data-testid="loginPassword"]', '1234');
        await page.click('[data-testid="loginSubmit"]');

        await page.waitForSelector('.Toastify__toast-body');
        const html = await page.$eval('.Toastify__toast-body', el => el.innerHTML);

        expect(html).toBe('نام کاربری یا رمزعبور اشتباه است.');
        await browser.close();

    }, app.delay);
    test('Register', async() => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size=1920 , 1080']

        });
        const page = await browser.newPage();
        await page.goto(app.serverAddress + '/auth/register');
        await page.click('[data-testid = "registerUsername"]');
        await page.type('[data-testid = "registerUsername"]', 'elahe.ta.72@gmail.com');
        await page.click('[data-testid="registerSubmit"]');
        await page.waitFor('[data-testid="registerSubmit"]');
        const url = await page.mainFrame().url();

    }, app.delay);

    test('Rest Password', async() => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size=1920 , 1080']

        });
        const page = await browser.newPage();
        await page.goto(app.serverAddress + '/auth/resetpassword');
        await page.click('[data-testid="resetPasswordUsername"]');
        await page.type('[data-testid="resetPasswordUsername"]', 'farazjalili@gmail.com');
        await page.click('[data-testid="resetPasswordSubmit"]');
        await page.waitFor('[data-testid="resetPasswordSubmit"]');
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