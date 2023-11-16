// @ts-check
import { test, expect } from '@playwright/test';
import { MainPage } from 'pages/main-page';

test('Open "from" dropdown', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openToursPage();
    await mainPage.clickOnField('from');
    await mainPage.expectDirectionFieldDropdownIsExist();
});

test('Choose city', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openToursPage();
    await mainPage.clickOnField('from');
    await mainPage.chooseDirectionVariant();
    await mainPage.expectFromFieldIsExist('changed');
});
