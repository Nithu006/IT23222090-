// Pos_Fun_019: Appreciation expression – S – romba nandri (from nithu.xlsx)
// Expected: ரொம்ப நன்றி. Covers: Appreciation expression.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'romba nandri';
const EXPECTED_TAMIL = 'ரொம்ப நன்றி';

test('Pos_Fun_019 – Appreciation expression', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  const normalized = output.replace(/\s+/g, ' ').trim();
  const expectedNormalized = EXPECTED_TAMIL.replace(/\s+/g, ' ').trim();
  expect(normalized).toBe(expectedNormalized);
});
