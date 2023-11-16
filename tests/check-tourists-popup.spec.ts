// @ts-check
import { test } from '@playwright/test';
import { MainPage } from 'pages/main-page';

test('Open tourists dropdown', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openToursPage();
    await mainPage.clickOnField('tourists');
    await mainPage.expectTouristsDropdownIsExist();
});

test('Open tourists dropdown and decrease adults', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openToursPage();
    await mainPage.clickOnField('tourists');
    await mainPage.decreaseTourists();
    await mainPage.expectTouristsNumberIsCorrect();
});