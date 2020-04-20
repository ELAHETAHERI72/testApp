const puppeteer = require('puppeteer');
const applicationConfig = require('./applicationConfig.js');

describe('Post Manager Module Test', () => {
    const app = new ApplicationConfig();
    test('create post', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80
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
        //    redirect to ads
        await page.click('button.Button-sc-2wq7ng-1');
        await page.waitFor('button.Button-sc-2wq7ng-1');
        // await page.goto(app.serverAddress + '/user/profile/createAd');
        await page.click('#react-select-6-input');
        await page.type('#react-select-6-input','مربوط به خانه');
        await page.keyboard.down('Enter');
        await page.click('#react-select-6-input');
        await page.keyboard.down('Enter');
        await page.waitFor('#react-select-10-input');
        await page.click('#react-select-10-input');
        await page.type('#react-select-10-input','اجاره کوتاه مدت');
        await page.keyboard.down('Enter');
        //
        await page.waitFor('#react-select-12-input');
        await page.click('#react-select-12-input');
        await page.type('#react-select-12-input','دفتر کار و فضای آموزشی');
        await page.click('#title');
        await page.type('#title','مبلمان هشت نفره');
        await page.click('#description');
        await page.type('#description','مبلمان دست دوم هشت نفره،رنگ قهوه ای تیره');
        await page.keyboard.press('Enter');


        // ---------------upload file start----------------------------------//
        // 
        // const fileInput = await page.$('#main_image');
        // await fileInput.uploadFile('./upload.jpg');
        

        await page.waitForSelector('input[type=file]');
        await page.waitFor(1000);
        const inputUploadHandle = await page.$('input[type=file]');
        let fileToUpload = './upload.jpg';
        inputUploadHandle.uploadFile(fileToUpload);
        // ---------------upload file end----------------------------------//

        // await page.click('#react-select-5-input');
        // await page.type('#react-select-5-input', 'قزوین وایران');
        // await page.click('#react-select-6-input');
        // await page.type('#react-select-6-input', 'ریال');
        // await page.click('#price');
        // await page.type('#price', '8000000');
        // await page.click('#step');
        // await page.type('#step', '2');
        await page.click('div.AdCreateEditFormstyles__ActionWrapper-sc-1hnwzb2-1 > button');
        

    }, app.delay);
});

