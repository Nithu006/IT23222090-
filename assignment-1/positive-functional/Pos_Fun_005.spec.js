// Pos_Fun_005: Compound sentence with connector – M – naan saapten aana pasikkuthu (from nithu.xlsx)
// Expected: நான் சாப்பிட்டேன் ஆனால் பசிக்குது. Covers: Daily language usage, compound sentence.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan saapten aana pasikkuthu';
const EXPECTED_TAMIL = 'நான் சாப்பிட்டேன் ஆனால் பசிக்குது';

test('Pos_Fun_005 – Compound sentence with connector', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
