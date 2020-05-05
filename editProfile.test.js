const puppeteer = require('puppeteer');
const applicationConfig = require('./applicationConfig.js');

describe('profileManager', () => {
    const app = new ApplicationConfig();
    // app.serverAddress + 
    // http://185.8.173.146:7070/auth/login
    // http://127.0.0.1/auth/login
    test('editProfile', async() => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80,
            args: ['--window-size=1920 , 1080']

        });
        const page = await browser.newPage();
        const app = new ApplicationConfig();
        await page.goto(app.serverAddress + '/auth/login');
        await page.waitForSelector('form');
        await page.click('#username');
        await page.type('#username', 'farazjalili@gmail.com');
        await page.click('#password');
        await page.type('#password', '12345678');
        await page.click('button[type = submit]');
        await page.waitFor('button[type = submit]');
        /////////////////////////////
        await page.waitForSelector('[data-testid="userImage"]');
        await page.click('[data-testid="userImage"]');
        await page.waitFor('[data-testid="userProfileButton"]');
        await page.click('[data-testid="userProfileButton"]');
        await page.waitForSelector('[data-testid = "userProfileEditButton"]');
        await page.click('[data-testid = "userProfileEditButton"]');

        await page.waitForSelector('#username');
        await page.evaluate(() => document.getElementById("username").value = "")
        await page.type('#username', 'alikz');

        await page.keyboard.down('Tab');
        const email = await page.$eval('#email', el => el.value);
        for (let i = 0; i < email.length; i++) {
            await page.keyboard.down('Backspace');
        }
        await page.type('#email', 'ali.ta.72@gmail.com');

        await page.keyboard.down('Tab');
        const mobileValue = await page.$eval('#mobile', el => el.value);
        for (let j = 0; j < mobileValue.length; j++) {
            await page.keyboard.down('Backspace');
        }
        await page.type('#mobile', '09330890962');

        await page.keyboard.down('Tab');
        const nameValue = await page.$eval('#first_name', el => el.value);
        for (let c = 0; c < nameValue.length; c++) {
            await page.keyboard.down('Backspace');
        }
        await page.type('#first_name', 'علی');

        await page.keyboard.down('Tab');
        const lastNameValue = await page.$eval('#last_name', el => el.value);
        for (let i = 0; i < lastNameValue.length; i++) {
            await page.keyboard.down('Backspace');
        }
        await page.type('#last_name', 'عظیمی');

        await page.keyboard.down('Tab');
        await page.evaluate(() => document.getElementById("bio").value = "")
        await page.type('#bio', 'بزنامه نویس');

        await page.keyboard.down('Tab');
        const jobValue = await page.$eval('#job', el => el.value);
        for (let i = 0; i < jobValue.length; i++) {
            await page.keyboard.down('Backspace');
        }
        await page.type('#job', 'بزنامه نویس');

        await page.waitForSelector('#react-select-8-input');
        const inputValue = await page.$eval('#react-select-8-input', el => el.value);
        for (let i = 0; i < inputValue.length; i++) {
            await page.keyboard.down('Backspace');
        }
        await page.type('#react-select-8-input', 'تهران, ایران');
        await page.waitFor(3000);
        await page.waitForSelector('#tealButton');
        await page.click('#tealButton');
        const popupval = await page.$eval('.Toastify__toast Toastify__toast--success Toastify__toast--rtl', e => e.innerHTML);
        expect(popupval).toBe('تغییرات با موفقیت انجام شد.');

        await page.click('#old_password');
        await page.type('#old_password', '12345678');

        await page.click('#password');
        await page.type('#password', '12345678');
        // .ProfileEditFormstyles__ActionWrapper-sc-11kjmne-0 > button
        await page.click('[data-testid="resetPasswordSubmit"]');
        const popupvalue = await page.$eval('.Toastify__toast Toastify__toast--success Toastify__toast--rtl', e => e.innerHTML);
        expect(popupvalue).toBe('تغییرات با موفقیت انجام شد.');
        await browser.close();

    }, app.delay)
})