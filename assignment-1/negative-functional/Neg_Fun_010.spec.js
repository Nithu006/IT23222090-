// Neg_Fun_010 (Excel Neg_Fun_0034): Sentence with number embedded in word – M (from nithu.xlsx)
// Input: version2 update next month release aagum. Expected: வெர்ஸின்2 அப்டேட் நெஸ்ட் மோந்து ரிலீஸ் ஆகும்.

const { test, expect } = require('@playwright/test');
const { BASE_URL, typeThanglishAndConvert, getOutputText } = require('../fixtures');

const INPUT_THANGLISH = 'version2 update next month release aagum';
const EXPECTED_TAMIL = 'வெர்ஸின்2 அப்டேட் நெஸ்ட் மோந்து ரிலீஸ் ஆகும்';

test('Neg_Fun_010 – Sentence with number embedded in word', async ({ page }) => {
  await page.goto(BASE_URL);
  await typeThanglishAndConvert(page, INPUT_THANGLISH);
  const output = await getOutputText(page);
  expect(output.trim()).toBeTruthy();
  expect(output).toMatch(/[\u0B80-\u0BFF]/);
  expect(output.trim()).toBe(EXPECTED_TAMIL.trim());
});
