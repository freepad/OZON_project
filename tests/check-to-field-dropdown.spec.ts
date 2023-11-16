// @ts-check
import { test, expect } from '@playwright/test';
import { MainPage } from 'pages/main-page';

test('Open "to" dropdown', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openToursPage();
    await mainPage.clickOnField('to');
    await mainPage.expectDirectionFieldDropdownIsExist();
});

test('Choose country', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openToursPage();
    await mainPage.clickOnField('to');
    await mainPage.chooseDirectionVariant();
    await mainPage.expectToFieldIsExist('changed');
});
