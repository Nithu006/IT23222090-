// Pos_Fun_014: Direct command – S – inga udkaaru (from nithu.xlsx)
// Expected: இங்க உட்காரு. Covers: Direct command.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'inga udkaaru';
const EXPECTED_TAMIL = 'இங்க உட்காரு';

test('Pos_Fun_014 – Direct command', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
