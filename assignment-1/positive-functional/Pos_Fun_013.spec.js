// Pos_Fun_013: Confirmation question – S – idhu unmaiya? (from nithu.xlsx)
// Expected: இது உண்மையா?. Covers: Confirmation question.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'idhu unmaiya?';
const EXPECTED_TAMIL = 'இது உண்மையா?';

test('Pos_Fun_013 – Confirmation question', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toContain(EXPECTED_TAMIL.trim());
});
