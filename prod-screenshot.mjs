import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto('https://portfolio-eight-umber-28.vercel.app');
await page.waitForTimeout(3000);

// Scroll to trigger animations
await page.evaluate(() => window.scrollTo(0, 500));
await page.waitForTimeout(500);
await page.evaluate(() => window.scrollTo(0, 1000));
await page.waitForTimeout(500);
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(1000);

await page.screenshot({ path: '/tmp/portfolio-prod.png', fullPage: true });
console.log('Production screenshot saved!');
await browser.close();
