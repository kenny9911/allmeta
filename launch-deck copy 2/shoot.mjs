import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FILE = process.env.FILE || 'index.html';
const url = 'file://' + path.join(__dirname, FILE);
const outDir = path.join(__dirname, process.env.OUT || 'shots');

const args = process.argv.slice(2);
const only = args.length ? args.map(Number) : null; // 1-based slide numbers

const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  channel: undefined,
});
const page = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(800); // fonts

const count = await page.locator('.slide').count();
console.log('slides:', count);

const list = only || Array.from({ length: count }, (_, i) => i + 1);
for (const n of list) {
  const i = n - 1;
  await page.evaluate((idx) => {
    document.querySelectorAll('.slide')[idx].scrollIntoView();
  }, i);
  await page.waitForTimeout(1100); // snap + reveal
  const el = page.locator('.slide').nth(i);
  await el.screenshot({ path: path.join(outDir, `slide-${String(n).padStart(2, '0')}.png`) });
  console.log('shot', n);
}
await browser.close();
console.log('done');
