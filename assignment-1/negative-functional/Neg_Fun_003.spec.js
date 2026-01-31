// Neg_Fun_003 (Excel Neg_Fun_0027): Sentence with percentage and mixed punctuation – M (from nithu.xlsx)
// Input: profit 30% mela increase aagum. Expected: ப்ரோபைட் 30% மேல இனிசிரேஸ் ஆகும்.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'profit 30% mela increase aagum';
const EXPECTED_TAMIL = 'ப்ரோபைட் 30% மேல இனிசிரேஸ் ஆகும்';

test('Neg_Fun_003 – Sentence with percentage and mixed punctuation', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
