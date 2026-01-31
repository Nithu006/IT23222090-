// Pos_Fun_006: Compound sentence with condition – M – nee vandhaal appuram pesalaam (from nithu.xlsx)
// Expected: நீ வந்தால் அப்புறம் பேசலாம். Covers: Compound sentence, M length.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'nee vandhaal appuram pesalaam';
const EXPECTED_TAMIL = 'நீ வந்தால் அப்புறம் பேசலாம்';

test('Pos_Fun_006 – Compound sentence with condition', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  const normalized = output.replace(/\s+/g, ' ').trim();
  const expectedNormalized = EXPECTED_TAMIL.replace(/\s+/g, ' ').trim();
  expect(normalized).toBe(expectedNormalized);
});
