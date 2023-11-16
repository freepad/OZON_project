// @ts-check
import { test } from '@playwright/test';
import { MainPage } from 'pages/main-page';

test('Open nights dropdown', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openToursPage();
    await mainPage.clickOnField('nights');
    await mainPage.expectNightsDropdownIsExist();
});

test('Open nights popup and apply night-round toggle', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openToursPage();
    await mainPage.clickOnField('nights');
    await mainPage.applyToggle();
    await mainPage.expectNightsToggleIsApplied();
});