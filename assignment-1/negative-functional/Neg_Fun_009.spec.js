// Neg_Fun_009 (Excel Neg_Fun_0033): Place name altered incorrectly – S (from nithu.xlsx)
// Input: naan jaffna pogiren. Expected: நான் ஜபிபின போகிறேன் (place name handling).

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan jaffna pogiren';
const EXPECTED_TAMIL = 'நான் ஜபிபின போகிறேன்';

test('Neg_Fun_009 – Place name altered incorrectly', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
