// Pos_UI_001 (Excel Pos_UI_0035): Real-time Tamil conversion while typing – S (from nithu.xlsx)
// Input: man gedhara yanavaa. Expected: Tamil text updates instantly as typing occurs. Covers: Usability flow (real-time conversion).

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'man gedhara yanavaa';

test('Pos_UI_001 – Real-time Tamil conversion while typing', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
});
