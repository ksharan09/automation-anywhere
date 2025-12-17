const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://community.cloud.automationanywhere.digital');

  // 👇 LOGIN MANUALLY in the opened browser
  // Enter username & password
  // Wait until dashboard loads

  await page.waitForTimeout(30000); // wait 30 sec after login

  await context.storageState({ path: 'auth.json' });
  await browser.close();

  console.log('✅ Auth session saved');
})();
