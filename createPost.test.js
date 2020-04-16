const puppeteer = require('puppeteer');
const applicationConfig = require('./applicationConfig.js')

test('create post',async ()=>{
    const browser =await puppeteer.launch({
        headless:false,
        slowMo:80
    })
    const page =await browser.newPage()
    const app =new ApplicationConfig()
    await page.goto(app.serverAddress)
    await page.waitForSelector('form');
           await page.click('#username')
           await page.type('#username','farazjalili@gmail.com')
           await page.click('#password')
           await page.type('#password','12345678')
           await page.click('button[type = submit]')
           await page.waitFor('button[type = submit]')
        //    redirect to ads
           await page.click('.Button-sc-2wq7ng-1')
           await page.waitFor('.Button-sc-2wq7ng-1')
        //    redrect to createAd
           await page.focus('#react-select-6-input')
           await page.type('#react-select-11-input','مربوط به خانه')
           await page.keyboard.down('Enter')
           await page.waitFor('#react-select-10-input')
           await page.click('#react-select-10-input')
           await page.type('#react-select-10-input','وسایل و تزئینات خانه')

           await page.waitFor('#react-select-12-input')
           await page.click('#react-select-12-input')
           await page.type('#react-select-12-input','میز و صندلی')
           await page.click('#type::after')
           await page.click('#title')
           await page.type('#title','مبلمان هشت نفره')
           await page.click('#description')
           await page.type('#description','مبلمان دست دوم هشت نفره،رنگ قهوه ای تیره')
           await page.keyboard.press('Enter')
           await page.click('.Button-sc-2wq7ng-1')
},app.delay)
