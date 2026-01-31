// Pos_Fun_018: Greeting sentence – S – vanakkam eppadi irukkeenga? (from nithu.xlsx)
// Expected: வணக்கம் எப்படி இருக்கீங்க?. Covers: Greeting sentence.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'vanakkam eppadi irukkeenga?';
const EXPECTED_TAMIL = 'வணக்கம் எப்படி இருக்கீங்க?';

test('Pos_Fun_018 – Greeting sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  const normalized = output.replace(/\s+/g, ' ').trim();
  const expectedNormalized = EXPECTED_TAMIL.replace(/\s+/g, ' ').trim();
  expect(normalized).toBe(expectedNormalized);
});
