// Pos_Fun_022: Mixed English health sentence – M – naan doctor kitta poyi check panninen (from nithu.xlsx)
// Expected: நான் டாக்டர் கிட்ட போய் செக் பண்ணினேன். Covers: Mixed English health sentence.
// Note: Excel had wrong input "Mixed English health sentence"; using Thanglish for expected Tamil.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'naan doctor kitta poyi check panninen';
const EXPECTED_TAMIL = 'நான் டாக்டர் கிட்ட போய் செக் பண்ணினேன்';

test('Pos_Fun_022 – Mixed English health sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
