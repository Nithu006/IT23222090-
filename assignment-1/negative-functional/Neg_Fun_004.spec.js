// Neg_Fun_004 (Excel Neg_Fun_0028): Incorrect conversion for joined Thanglish words – S (from nithu.xlsx)
// Input: naanveettukupogiren. Expected: நான் வீட்டுக்கு போகிறேன் (word segmentation).

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naanveettukupogiren';
const EXPECTED_TAMIL = 'நான் வீட்டுக்கு போகிறேன்';

test('Neg_Fun_004 – Incorrect conversion for joined Thanglish words', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
