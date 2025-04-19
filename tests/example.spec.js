import { test, expect } from '@playwright/test';

test.describe('test_server UI', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should load the server page at http://localhost:3000', async ({ page }) => {
    await expect(page).toHaveURL('http://localhost:3000/');
  });

  test('should have a title', async ({ page }) => {
    await expect(page).toHaveTitle('Number Viewer');
  });

  test('should have heading visible', async ({ page }) => {
    const heading = page.getByRole('heading', { name: /Number from/i });
    await expect(heading).toBeVisible();
  });

});
