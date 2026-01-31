// Pos_Fun_023: future tense sentence – M – Naan nalaikku varuven varumpothu vanki varukinren enakkaka kaththirukkavum (from nithu.xlsx)
// Expected: நான் நாளைக்கு வருவேன் வரும்போது வாங்கி வருகின்றேன் எனக்காக காத்திருக்கவும். Covers: Future tense sentence.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'Naan nalaikku varuven varumpothu vanki varukinren enakkaka kaththirukkavum';
const EXPECTED_TAMIL = 'நான் நாளைக்கு வருவேன் வரும்போது வாங்கி வருகின்றேன் எனக்காக காத்திருக்கவும்';

test('Pos_Fun_023 – future tense sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
