// Pos_Fun_020: Polite request with English – S – please konjam help pannunga (from nithu.xlsx)
// Expected: ப்ளீஸ் கொஞ்சம் ஹெல்ப் பண்ணுங்க. Covers: Polite request with English.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'please konjam help pannunga';
const EXPECTED_TAMIL = 'ப்ளீஸ் கொஞ்சம் ஹெல்ப் பண்ணுங்க';

test('Pos_Fun_020 – Polite request with English', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  const normalized = output.replace(/\s+/g, ' ').trim();
  const expectedNormalized = EXPECTED_TAMIL.replace(/\s+/g, ' ').trim();
  expect(normalized).toBe(expectedNormalized);
});
