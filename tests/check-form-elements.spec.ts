// @ts-check
import { test } from '@playwright/test';
import { MainPage } from 'pages/main-page';

test('Check tours page heading', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openToursPage();
    await mainPage.expectHeadingIsExist();
});

test('Check from field', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openToursPage();
    await mainPage.expectFromFieldIsExist('default');
});

test('Check to field', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openToursPage();
    await mainPage.expectToFieldIsExist('default');
});

test('Check date field', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openToursPage();
    await mainPage.expectDateFieldIsExist();
});

test('Check nights field', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openToursPage();
    await mainPage.expectNightsFieldIsExist();
});

test('Check tourists field', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openToursPage();
    await mainPage.expectTouristsFieldIsExist();
});

test('Check search tours button', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openToursPage();
    await mainPage.expectSearchToursButtonIsExist();
});
