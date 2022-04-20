const puppeteer = require('puppeteer');

(async () => {
//   const browser = await puppeteer.launch({headless:false, args:['--disable-extensions-except=/path/to/my/extension',
//   '--load-extension=/path/to/my/extension',
// '--user-data-dir=%userprofile%\\AppData\\Local\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1'],
// //'--profile-directory=Profile 1'],
//     executablePath: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',
//   });

const browser = await puppeteer.launch({headless:false, executablePath: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe'});
  const page = await browser.newPage();
  //await page.setViewport({width: 900, height: 800});
  await page.goto('https://bakedbeans.io');
})();