// Pos_Fun_021: Informal request – S – dei inga va da (from nithu.xlsx)
// Expected: டேய் இங்க வா டா. Covers: Informal request.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'dei inga va da';
const EXPECTED_TAMIL = 'டேய் இங்க வா டா';

test('Pos_Fun_021 – Informal request', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
