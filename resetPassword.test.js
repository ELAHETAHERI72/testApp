const puppeteer = require('puppeteer')
const applicationConfig=require('./applicationConfig.js')

test('resetPssword',async()=>{
    const browser =await puppeteer.launch({
        headless:false,
        slowMo:80,
        args:['--window-size=1920 , 1080']

    })
    const page =await browser.newPage()
    // const app =new ApplicationConfig()
    await page.goto(applocation_config.serverAddress+'/auth/resetpassword')
    await page.click('#username')
    await page.type('#username','farazjalili@gmail.com')
    await page.click('button[type=submit]')
    await page.waitFor('button[type=submit]')
    await page.click('#password')
    await page.type('#password','12345678')
    await page.click('#confirmPassword')
    await page.type('#confirmPassword','12345678')
    await page.click('button[type=submit]')
    const url = page.mainFrame.url()
    expect(url).toContain('login');

},application_config.delay)