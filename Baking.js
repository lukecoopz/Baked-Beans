const puppeteer = require('puppeteer');

(async () => {
const browser = await puppeteer.launch({headless:false, executablePath: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe'});
  const page = await browser.newPage();
  await page.setViewport({width: 1080, height: 1000});
  await page.goto('https://bakedbeans.io');
})();