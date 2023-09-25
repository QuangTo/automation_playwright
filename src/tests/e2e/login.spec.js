const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto(`https://practice.automationtesting.in/my-account/`);
});

test.describe("Login", () => {
  test("Login with correct info", async ({ page }) => {});
});
