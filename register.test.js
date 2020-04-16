const puppeteer = require('puppeteer')
const applicationConfig=require('./applicationConfig.js')



//-------------------------------- register-test--------------------------------///
describe("register-Test" ,()=>{
    test('register',async ()=>{
        const browser = await puppeteer.launch({
            headless :false,
            slowMo:80,
            args:['--window-size=1920 , 1080']
    
        })
        const page =await browser.newPage()
        // const app = ApplicationConfig()  
        await page.goto(applocation_config.serverAddress+'/auth/register')
        await page.click('#username')
        await page.type('#username','elahe.ta.72@gmail.com')
        await page.click('button[type=submit]')
        await page.waitFor('button[type=submit]')
        const url = await page.mainFrame().url();
        expect(url).toContain('verify'); // Uses Jest


          
    },30000)
})