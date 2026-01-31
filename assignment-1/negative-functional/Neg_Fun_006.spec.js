// Neg_Fun_006 (Excel Neg_Fun_0030): Symbols break transliteration – S (from nithu.xlsx)
// Input: naan veetukku pogiren!!! @@##. Expected: நான் வீட்டுக்கு pogiren!!! @@## (or full Tamil).

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan veetukku pogiren!!! @@##';
const EXPECTED_TAMIL = 'நான் வீட்டுக்கு pogiren!!! @@##';

test('Neg_Fun_006 – Symbols break transliteration', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
