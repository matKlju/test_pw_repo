import { test, expect } from '@playwright/test';

test('should load the server page at http://localhost:3000', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveURL('http://localhost:3000/');
});
