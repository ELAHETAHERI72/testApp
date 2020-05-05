const puppeteer = require('puppeteer');
const applicationConfig = require('./applicationConfig.js');

describe('Post Manager Module Test', () => {
    const app = new ApplicationConfig();
    test('create post', async() => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80
        });
        const page = await browser.newPage();
        const app = new ApplicationConfig();
        await page.goto(app.serverAddress + '/auth/login');
        await page.waitForSelector('form');
        await page.click('[data-testid="loginUsername"]');
        await page.type('[data-testid="loginUsername"]', 'farazjalili@gmail.com');
        await page.click('[data-testid="loginPassword"]');
        await page.type('[data-testid="loginPassword"]', '12345678');
        await page.click('[data-testid="loginSubmit"]');
        await page.waitFor('[data-testid="loginSubmit"]');
        //    redirect to ads
        await page.click('[data-testid="createAd"]');
        await page.waitFor('[data-testid="createAd"]');
        // await page.goto(app.serverAddress + '/user/profile/createAd');
        await page.click('#react-select-6-input');
        await page.type('#react-select-6-input', 'مربوط به خانه');
        await page.keyboard.down('Enter');
        await page.click('#react-select-6-input');
        await page.keyboard.down('Enter');
        await page.waitFor('#react-select-10-input');
        await page.click('#react-select-10-input');
        await page.type('#react-select-10-input', 'اجاره کوتاه مدت');
        await page.keyboard.down('Enter');
        //
        await page.waitFor('#react-select-12-input');
        await page.click('#react-select-12-input');
        await page.type('#react-select-12-input', 'دفتر کار و فضای آموزشی');
        await page.click('#title');
        await page.type('#title', 'مبلمان هشت نفره');
        await page.click('#description');
        await page.type('#description', 'مبلمان دست دوم هشت نفره،رنگ قهوه ای تیره');
        await page.keyboard.press('Enter');


        // ---------------upload file start----------------------------------//
        const [fileChooser] = await Promise.all([
            page.waitForFileChooser(),
            page.waitForSelector('#main_image'),
            page.click('#main_image'),
        ]);
        console.log(fileChooser);
        await fileChooser.accept(['./upload.jpg']);

        // second solution


        // const eventHandeler = await page.$eval('#main_image');
        // await eventHandeler.uploadFile(eventHandeler);


        // ---------------upload file end----------------------------------//

        // await page.click('#react-select-5-input');
        // await page.type('#react-select-5-input', 'قزوین وایران');
        // await page.click('#react-select-6-input');
        // await page.type('#react-select-6-input', 'ریال');
        // await page.click('#price');
        // await page.type('#price', '8000000');
        // await page.click('#step');
        // await page.type('#step', '2');
        await page.click('[data-testid="adCreateSubmit"]');


    }, 9000000);
});