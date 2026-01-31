// Neg_Fun_007 (Excel Neg_Fun_0031): Numeric and unit handling failure – S (from nithu.xlsx)
// Input: enaku 2kg arisi venum. Expected: எனக்கு 2kg அரிசி வேண்டும்.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'enaku 2kg arisi venum';
const EXPECTED_TAMIL = 'எனக்கு 2kg அரிசி வேண்டும்';

test('Neg_Fun_007 – Numeric and unit handling failure', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
