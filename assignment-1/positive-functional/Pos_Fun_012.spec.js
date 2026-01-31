// Pos_Fun_012: Permission question – S – naan ulla varalama? (from nithu.xlsx)
// Expected: நான் உள்ள வரலாமா?. Covers: Permission question.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan ulla varalama?';
const EXPECTED_TAMIL = 'நான் உள்ள வரலாமா?';

test('Pos_Fun_012 – Permission question', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
