const puppeteer = require('puppeteer')

// // test('inorrect-logintest',async()=>{
// //     const browser = await puppeteer.launch({
// //         headless :false,
// //         slowMo:80,
// //         args:['--window-size=1920 , 1080']

// //     })
// //     const page = await browser.newPage()
// //     await page.goto('http://185.8.173.146:7070/auth/login')
// //     await page.waitForSelector('form');
// //     await page.click('#username')
// //     await page.type('#username','el.taheri.72@gmail.com')
// //     await page.click('#password')
// //     await page.type('#password','12345678')
// //     await page.click('button[type = submit]')
    
// //     await page.waitForSelector('.kIyIzC');
// //     const html = await page.$eval('.kIyIzC', el => el.innerHTML);

// //     expect(html).toBe('user or password is wrong');
    
// // },30000)

// // describe('correct-logintest-Test',()=>{
    
  
// // it('ّcorrect-logintest',async()=>{
// //     let browser = await puppeteer.launch({
// //         headless :false,
// //         slowMo:80,
// //         args:['--window-size=1920 , 1080']

// //     })
// //     const page = await browser.newPage()
// //     await page.goto('http://185.8.173.146:7070/auth/login')
// //     await page.waitForSelector('form');
// //     await page.click('#username')
// //     await page.type('#username','farazjalili@gmail.com')
// //     await page.click('#password')
// //     await page.type('#password','12345678')
// //     await page.click('button[type = submit]')

    
// //     await page.waitFor('button[type = submit]');

// //     const url = await page.mainFrame().url();
// //     expect(url).toContain('ads'); // Uses Jest
    
// // },30000)

// // })

// //-------------------------------- register-test--------------------------------///
// describe("register-Test" ,()=>{
//     test('register',async ()=>{
//         const browser = await puppeteer.launch({
//             headless :false,
//             slowMo:80,
//             args:['--window-size=1920 , 1080']
    
//         })
//         const page =await browser.newPage()
//         await page.goto('http://185.8.173.146:7070/auth/register')
//         await page.click('#username')
//         await page.type('#username','elahe.ta.72@gmail.com')
//         await page.click('button[type=submit]')
//         await page.waitFor('button[type=submit]')
//         const url = await page.mainFrame().url();
//         expect(url).toContain('verify'); // Uses Jest


          
//     },30000)
// })
//-----------------------------------  reset password //

// test('resetPssword',async()=>{
//     const browser =await puppeteer.launch({
//         headless:false,
//         slowMo:80,
//         args:['--window-size=1920 , 1080']

//     })
//     const page =await browser.newPage()
//     await page.goto('http://185.8.173.146:7070/auth/resetpassword')
//     await page.click('#username')
//     await page.type('#username','farazjalili@gmail.com')
//     await page.click('button[type=submit]')
//     await page.waitFor('button[type=submit]')
//     await page.click('#password')
//     await page.type('#password','12345678')
//     await page.click('#confirmPassword')
//     await page.type('#confirmPassword','12345678')
//     await page.click('button[type=submit]')
//     const url = page.mainFrame.url()
//     expect(url).toContain('login');

// },30000)
// ----------------------------------------// edit profile test



    // test('editProfile',async ()=>{
    //     const browser = await puppeteer.launch({
    //         headless :false,
    //         slowMo:80,
    //         args:['--window-size=1920 , 1080']
    
    //     })
        // const page =await browser.newPage()
        //    await page.goto('http://185.8.173.146:7070/auth/login')
        //    await page.waitForSelector('form');
        //    await page.click('#username')
        //    await page.type('#username','farazjalili@gmail.com')
        //    await page.click('#password')
        //    await page.type('#password','12345678')
        //    await page.click('button[type = submit]')
        //    await page.waitFor('button[type = submit]')
        //    await page.goto('http://185.8.173.146:7070/users/12')
        //    await page.waitFor('http://185.8.173.146:7070/users/12')
        //    await page.click('.Button-sc-2wq7ng-1')
        //    await page.waitFor('.Button-sc-2wq7ng-1')



        //    await page.goto('http://185.8.173.146:7070/user/profile/editProfile')
        //    await page.waitFor('http://185.8.173.146:7070/user/profile/editProfile')
        //    const elementHandle=await page.$('input[name=username]');
        //    await elementHandle.click();
        //    await elementHandle.focus();
        // // click three times to select all
        //   await elementHandle.click({clickCount: 3});
        //   await elementHandle.press('Backspace');
        //   await elementHandle.type('sdfghj');
          
    // },42007)




//-------------------------------- creat post//

test('create post',async ()=>{
    const browser =await puppeteer.launch({
        headless:false,
        slowMo:80
    })
    const page =await browser.newPage()
    await page.goto('http://185.8.173.146:7070/auth/login')
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
           await page.click('#react-select-6-input')
           await page.type('#react-select-11-input','املاک')
           await page.keyboard.down('Enter')
        
       
},30000)
