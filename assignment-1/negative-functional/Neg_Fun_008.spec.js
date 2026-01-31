// Neg_Fun_008 (Excel Neg_Fun_0032): Date format inside sentence – S (from nithu.xlsx)
// Input: meeting 25/12/2025 ku iruku. Expected: மீட்டிங்  25/12/2025 கு இருக்கு.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'meeting 25/12/2025 ku iruku';
const EXPECTED_TAMIL = 'மீட்டிங்  25/12/2025 கு இருக்கு';

test('Neg_Fun_008 – Date format inside sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
