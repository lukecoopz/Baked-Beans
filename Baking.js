const puppeteer = require('puppeteer');

(async () => {
const browser = await puppeteer.launch({headless:false, executablePath: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe'});
  const page = await browser.newPage();
  await page.setViewport({width: 900, height: 800});
  await page.goto('https://bakedbeans.io');
})();