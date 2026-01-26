import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

await page.goto('https://portfolio-eight-umber-28.vercel.app');
await page.waitForTimeout(2000);

// Scroll progressively to trigger all animations
for (let i = 0; i <= 3000; i += 300) {
  await page.evaluate((y) => window.scrollTo(0, y), i);
  await page.waitForTimeout(300);
}

// Back to top
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);

await page.screenshot({ path: '/tmp/portfolio-prod2.png', fullPage: true });
console.log('Full production screenshot saved!');
await browser.close();
