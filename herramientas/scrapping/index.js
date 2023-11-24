const puppeteer = require('puppeteer');

(async() => {
    console.log('We throw navegator');
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https:/es.wikipedia.org/wiki/Node.js');
    let title1 = await page.evaluate(()=> {
        const h1 = document.querySelector('h1');
        console.log(h1.innerText);
        return h1.innerText;
    })
    console.log(title1);
    console.log('We close navegator');
    browser.close();
    console.log('The navegator is close');
})();