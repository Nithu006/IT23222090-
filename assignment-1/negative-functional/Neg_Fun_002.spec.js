// Neg_Fun_002 (Excel Neg_Fun_0026): Sentence with future year and extra punctuation – M (from nithu.xlsx)
// Input: project 2026 la complete aagum. Expected: ப்ராஜெக்ட்  2026 ல கம்ப்ளீட் ஆகும்.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'project 2026 la complete aagum';
const EXPECTED_TAMIL = 'ப்ராஜெக்ட்  2026 ல கம்ப்ளீட் ஆகும்';

test('Neg_Fun_002 – Sentence with future year and extra punctuation', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
