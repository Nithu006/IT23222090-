// Pos_Fun_015: Polite command – S – konjam wait pannunga (from nithu.xlsx)
// Expected: கொஞ்சம் வேய்ட் பண்ணுங்க. Covers: Polite command.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'konjam wait pannunga';
const EXPECTED_TAMIL = 'கொஞ்சம் வேய்ட் பண்ணுங்க';

test('Pos_Fun_015 – Polite command', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
