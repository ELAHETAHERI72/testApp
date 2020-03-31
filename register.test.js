const puppeteer = require('puppeteer')


//-------------------------------- register-test--------------------------------///
describe("register-Test" ,()=>{
    test('register',async ()=>{
        const browser = await puppeteer.launch({
            headless :false,
            slowMo:80,
            args:['--window-size=1920 , 1080']
    
        })
        const page =await browser.newPage()
        await page.goto('http://185.8.173.146:7070/auth/register')
        await page.click('#username')
        await page.type('#username','elahe.ta.72@gmail.com')
        await page.click('button[type=submit]')
        await page.waitFor('button[type=submit]')
        const url = await page.mainFrame().url();
        expect(url).toContain('verify'); // Uses Jest


          
    },30000)
})