// Pos_Fun_004: Simple future tense sentence – S – naan naalai varuven (from nithu.xlsx)
// Expected: நான் நாளை வருவேன். Covers: Daily language usage, future tense.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan naalai varuven';
const EXPECTED_TAMIL = 'நான் நாளை வருவேன்';

test('Pos_Fun_004 – Simple future tense sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
