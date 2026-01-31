// Neg_Fun_005 (Excel Neg_Fun_0029): Spelling mistakes cause incorrect transliteration – S (from nithu.xlsx)
// Input: enaku sapadu venum. Expected: எனக்கு சாப்பாடு வேண்டும்.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'enaku sapadu venum';
const EXPECTED_TAMIL = 'எனக்கு சாப்பாடு வேண்டும்';

test('Neg_Fun_005 – Spelling mistakes cause incorrect transliteration', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
