// Pos_Fun_017: Polite request with English – M – please indha file mail pannunga (from nithu.xlsx)
// Expected: ப்ளீஸ்  இந்த பைலை மெயில் பண்ணுங்க. Covers: Mixed Tanglish + English.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'please indha file mail pannunga';
const EXPECTED_TAMIL = 'ப்ளீஸ்  இந்த பைலை மெயில் பண்ணுங்க';

test('Pos_Fun_017 – Polite request with English', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
