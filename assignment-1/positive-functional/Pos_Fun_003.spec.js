// Pos_Fun_003: Simple past tense sentence – S – avan palliku ponaan (from nithu.xlsx)
// Expected: அவன் பள்ளிக்குப் போனான். Covers: Daily language usage, past tense.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'avan palliku ponaan';
const EXPECTED_TAMIL = 'அவன் பள்ளிக்குப் போனான்';

test('Pos_Fun_003 – Simple past tense sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
