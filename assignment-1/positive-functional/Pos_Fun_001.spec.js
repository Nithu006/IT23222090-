// Pos_Fun_001: Simple daily action sentence – S – naan veetukku poren (from nithu.xlsx)
// Expected: நான் வீட்டுக்கு போறேன். Covers: Daily language usage, accuracy.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan veetukku poren';
const EXPECTED_TAMIL = 'நான் வீட்டுக்கு போறேன்';

test('Pos_Fun_001 – Simple daily action sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
