// Pos_Fun_011: Interrogative question – S – nee eppo varuva? (from nithu.xlsx)
// Expected: நீ எப்போ வருவ?. Covers: Interrogative question.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'nee eppo varuva?';
const EXPECTED_TAMIL = 'நீ எப்போ வருவ?';

test('Pos_Fun_011 – Interrogative question', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
