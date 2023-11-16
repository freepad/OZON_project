// @ts-check
import { test } from '@playwright/test';
import { MainPage } from 'pages/main-page';

test('Open calendar dropdown', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openToursPage();
    await mainPage.clickOnField('calendar');
    await mainPage.expectCalendarDropdownIsExist();
});

test('Open calendar and apply day-round toggle', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openToursPage();
    await mainPage.clickOnField('calendar');
    await mainPage.applyToggle();
    await mainPage.expectDateToggleIsApplied();
});