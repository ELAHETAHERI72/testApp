const puppeteer = require('puppeteer')


test('userTest',async()=>{
    const browser = await puppeteer.launch({
        headless :false,
        slowMo:80,
        args:['--window-size=1920 , 1080']

    })
    const page = await browser.newPage()
    await page.goto('http://185.8.173.146:7070/auth/login')
    await page.click('#username')
   let username = await page.type('#username','elahe.ta.72@gmail.com')
    await page.click('#password')
    let password =  await page.type('#password','12345678')
    await page.click('button[type = submit]')
})