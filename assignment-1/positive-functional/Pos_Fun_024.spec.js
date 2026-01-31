// Pos_Fun_024: past tense sentence – M – nertru puyal veesiyathu athanal maram murinthathu (from nithu.xlsx)
// Expected: நேற்று   புயல்  வீசியது  அதனால்  மரம்  முறிந்தது. Covers: Past tense sentence.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'nertru puyal veesiyathu athanal maram murinthathu';
const EXPECTED_TAMIL = 'நேற்று   புயல்  வீசியது  அதனால்  மரம்  முறிந்தது';

test('Pos_Fun_024 – past tense sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
