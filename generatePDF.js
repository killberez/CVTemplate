const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  const htmlFile = path.resolve('./public/index.html');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('file://' + htmlFile);

  const scrollDimension = await page.evaluate(() => {
    return {
      width: document.scrollingElement.scrollWidth,
      height: document.scrollingElement.scrollHeight,
    };
  });

  await page.setViewport({
    width: scrollDimension.width,
    height: scrollDimension.height,
  });

  const extraWidth = 100;
  const extraHeight = 200;

  await page.pdf({
    path: './public/cv.pdf',
    printBackground: true,
    width: scrollDimension.width + extraWidth,
    height: scrollDimension.height + extraHeight,
  });

  await browser.close();
})();
