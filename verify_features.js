const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 2500 });

  // Start the server
  const { exec } = require('child_process');
  const server = exec('npm run dev');

  // Wait for server to be ready
  await new Promise(resolve => setTimeout(resolve, 10000));

  try {
    await page.goto('http://localhost:3000/features', { waitUntil: 'networkidle' });
    await page.screenshot({ path: 'verification/features_new.png', fullPage: true });
    console.log('Screenshot saved to verification/features_new.png');
  } catch (e) {
    console.error('Failed to take screenshot:', e);
  } finally {
    await browser.close();
    server.kill();
  }
})();
