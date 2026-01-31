// Pos_Fun_009: Conditional complex sentence – M – nee padichaa nalla marks varum (from nithu.xlsx)
// Expected: நீ படிச்சா நல்ல மார்க்ஸ் வரும். Covers: Conditional complex sentence.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'nee padichaa nalla marks varum';
const EXPECTED_TAMIL = 'நீ படிச்சா நல்ல மார்க்ஸ் வரும்';

test('Pos_Fun_009 – Conditional complex sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
