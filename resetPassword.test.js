const puppeteer = require('puppeteer')


-----------------------------------  reset password //

test('resetPssword',async()=>{
    const browser =await puppeteer.launch({
        headless:false,
        slowMo:80,
        args:['--window-size=1920 , 1080']

    })
    const page =await browser.newPage()
    await page.goto('http://185.8.173.146:7070/auth/resetpassword')
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

},30000)