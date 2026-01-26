import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto('http://localhost:8001/');
await page.waitForTimeout(2000);

// Scroll to trigger animations
await page.evaluate(() => window.scrollTo(0, 500));
await page.waitForTimeout(500);
await page.evaluate(() => window.scrollTo(0, 1000));
await page.waitForTimeout(500);
await page.evaluate(() => window.scrollTo(0, 2000));
await page.waitForTimeout(500);
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(1000);

await page.screenshot({ path: '/tmp/portfolio-scrolled.png', fullPage: true });
console.log('Screenshot saved!');
await browser.close();
