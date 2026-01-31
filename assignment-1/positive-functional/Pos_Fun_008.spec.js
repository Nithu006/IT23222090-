// Pos_Fun_008: Cause and effect sentence – M – avan padichaan athanaala pass aanaan (from nithu.xlsx)
// Expected: அவன் படிச்சான் அதனால பாஸ் ஆனான். Covers: Cause and effect.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'avan padichaan athanaala pass aanaan';
const EXPECTED_TAMIL = 'அவன் படிச்சான் அதனால பாஸ் ஆனான்';

test('Pos_Fun_008 – Cause and effect sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
