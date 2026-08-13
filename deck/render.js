// Render each .slide element to a 2x PNG via Playwright (captures backdrop-filter glass).
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const file = 'file://' + path.resolve(__dirname, 'deck.html');
  const browser = await chromium.launch({ channel: 'chrome' });
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.goto(file, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  // full-bleed square pages for the exported PDF (on-screen deck keeps rounded corners)
  await page.addStyleTag({ content: '.slide{border-radius:0 !important; box-shadow:none !important}' });
  await page.waitForTimeout(500);
  const slides = await page.$$('.slide');
  const pad = n => String(n).padStart(2, '0');
  for (let i = 0; i < slides.length; i++) {
    const out = path.resolve(__dirname, 'slides', `slide-${pad(i + 1)}.png`);
    await slides[i].screenshot({ path: out });
    console.log('rendered', out);
  }
  await browser.close();
  console.log('DONE', slides.length, 'slides');
})().catch(e => { console.error(e); process.exit(1); });
