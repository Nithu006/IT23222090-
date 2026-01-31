// Pos_Fun_016: Negative ability sentence – S – naan adhai panna mudiyadhu (from nithu.xlsx)
// Expected: நான் அதை பண்ண முடியாது. Covers: Negative ability sentence.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan adhai panna mudiyadhu';
const EXPECTED_TAMIL = 'நான் அதை பண்ண முடியாது';

test('Pos_Fun_016 – Negative ability sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
