// Pos_Fun_007: Compound sentence – M – mazhai peiyuthu so naan pogavillai (from nithu.xlsx)
// Expected: மழை பெய்யுது சோ நான் போகவில்லை. Covers: Complex sentence.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'mazhai peiyuthu so naan pogavillai';
const EXPECTED_TAMIL = 'மழை பெய்யுது சோ நான் போகவில்லை';

test('Pos_Fun_007 – Compound sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
