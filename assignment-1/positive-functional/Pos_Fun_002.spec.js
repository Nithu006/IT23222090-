// Pos_Fun_002: Simple present tense sentence – S – akka samayal seikinra (from nithu.xlsx)
// Expected: அக்கா சமையல் செய்கின்றா. Covers: Daily language usage, present tense.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'akka samayal seikinra';
const EXPECTED_TAMIL = 'அக்கா சமையல் செய்கின்றா';

test('Pos_Fun_002 – Simple present tense sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
