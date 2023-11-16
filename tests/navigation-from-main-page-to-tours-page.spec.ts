// @ts-check
import { test, expect } from '@playwright/test';
import { MainPage } from 'pages/main-page';

test('Go to travel page', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openMainPage();
    await mainPage.clickOnGoToTravelButton();
    await page.waitForLoadState('networkidle');
    // Страница открывается в новой вкладке
    const context = await page.context();
    let pages = await context.pages();
    expect(pages[1].url()).toContain('travel');
});

test('Go to tours page', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openTravelPage();
    await mainPage.clickOnGoToToursTab();
    await page.waitForLoadState('networkidle');
    expect(page.url()).toContain('tours');
});
