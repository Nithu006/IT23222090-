// Pos_Fun_010: Complex contrast sentence – M – mazhai irundhaalum naanga varuvom (from nithu.xlsx)
// Expected: மழை இருந்தாலும் நாங்க வருவோம். Covers: Complex contrast sentence.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'mazhai irundhaalum naanga varuvom';
const EXPECTED_TAMIL = 'மழை இருந்தாலும் நாங்க வருவோம்';

test('Pos_Fun_010 – Complex contrast sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
