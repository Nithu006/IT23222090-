// Neg_Fun_001 (Excel Neg_Fun_0025): Sentence with time – S – meeting 7.30 AM ku start aagum (from nithu.xlsx)
// Expected: மீட்டிங் 7.30 AM கு ஸ்டார்ட் ஆகும். Covers: Time format, robustness.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'meeting 7.30 AM ku start aagum';
const EXPECTED_TAMIL = 'மீட்டிங் 7.30 AM கு ஸ்டார்ட் ஆகும்';

test('Neg_Fun_001 – Sentence with time', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
