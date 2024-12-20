import { test, expect } from '@playwright/test';

test('Assertion Practice', async ({ page }) => {
    await page.goto("https://www.saucedemo.com");

    await expect(page.locator('[data-test="login-button"]')).toHaveCount(1);
    await expect(page.locator('[data-test="login-button-adadada"]')).toHaveCount(1);
    await expect(page.locator('[data-test="login-button"]')).toBeEnabled();
    await expect.soft(page.locator('[data-test="login-button"]')).toBeDisabled();
    // await expect(page.locator('[data-test="login-button"]')).toBeDisabled();
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    // await expect(page.locator('[data-test="login-button"]')).toBeHidden();
    await expect(page.locator('[data-test="login-button"]')).toHaveText("Login");
    await expect(page.locator('[data-test="login-button"]')).toHaveAttribute('name', 'login-button');
    await expect(page.locator('[data-test="login-button"]')).toHaveId('login-button');
    await expect(page).toHaveURL("https://www.saucedemo.com");
    await expect(page).toHaveTitle('Swag Labs');
    // expect(5).toBe(5);
    //Not Matchers
    await expect(page.locator('[data-test="login-button"]')).not.toHaveText("Register");
    await expect(page,"This is custom error message").not.toHaveTitle('Swag Labs');    
})