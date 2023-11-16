import { expect, type Locator, type Page } from '@playwright/test';

export class MainPage {
    readonly mainPage: Page;
    readonly _goToTravelButton: Locator;
    readonly _goToToursTab: Locator;
    readonly _pageHeading: Locator;
    readonly _fromField: Locator;
    readonly _toField: Locator;
    readonly _dateField: Locator;
    readonly _nightsField: Locator;
    readonly _touristsField: Locator;
    readonly _fieldDropdown: Locator;
    readonly _cities: Locator;
    readonly _weekDays: Locator;
    readonly _months: Locator;
    readonly _toggleBlock: Locator
    readonly _toggle: Locator
    readonly _nightsHeading: Locator
    readonly _nightsSlider: Locator
    readonly _nightsSubtitle: Locator
    readonly _nightsDescription: Locator
    readonly _touristsHeading: Locator
    readonly _adults: Locator
    readonly _adultsDescription: Locator
    readonly _children: Locator
    readonly _childrenDescription: Locator
    readonly _quantityButtons: Locator
    readonly _quantityValues: Locator
    readonly _searchToursButton: Locator

    _dropdownLocator = '[data-popper-placement="bottom-start"]'

    constructor(page) {
        this.mainPage = page;
        this._goToTravelButton = page.getByText('Билеты, отели, туры');
        this._goToToursTab = page.getByRole('button', { name: 'NEW Туры' });
        this._pageHeading = page.getByRole('heading', { name: 'Поиск туров' });
        this._fromField = page.locator('[name="tourSearchFrom"]').locator('..');
        this._toField = page.locator('[name="tourSearchTo"]').locator('..');
        this._dateField = page.locator('[data-widget="searchForm"]').locator('label').nth(2);
        this._nightsField = page.locator('[data-widget="searchForm"]').locator('label').nth(3);
        this._touristsField = page.locator('[data-widget="searchForm"]').locator('[class*="d4147-a"]').nth(4);
        this._fieldDropdown = page.locator(this._dropdownLocator);
        this._cities = page.locator(`${this._dropdownLocator} [role="option"]`);
        this._weekDays = page.locator(this._dropdownLocator).locator('li');
        this._months = page.locator(this._dropdownLocator).locator('[class="daa9"]');
        this._toggleBlock = page.locator(this._dropdownLocator).locator('[class="a1sa"]')
        this._toggle = page.locator(this._dropdownLocator).locator('.a4220-a5')
        this._nightsHeading = page.locator(this._dropdownLocator).getByRole('heading', { name: 'Количество ночей: 7' })
        this._nightsSlider = page.locator(this._dropdownLocator).locator('.e037-a')
        this._nightsSubtitle = page.locator(this._dropdownLocator).getByText('Длительность тура ±2 ночи')
        this._nightsDescription = page.locator(this._dropdownLocator).getByText('бывает выгоднее')
        this._touristsHeading = page.locator(this._dropdownLocator).getByText('Туристы')
        this._adults = page.locator(this._dropdownLocator).getByText('Взрослые')
        this._adultsDescription = page.locator(this._dropdownLocator).getByText('от 17 лет и старше')
        this._children = page.locator(this._dropdownLocator).getByText('Дети')
        this._childrenDescription = page.locator(this._dropdownLocator).getByText('от 0 до 16 лет')
        this._quantityButtons = page.locator(this._dropdownLocator).locator('[class*="aae1"]')
        this._quantityValues = page.locator(this._dropdownLocator).locator('[class*="ea0a"]')
        this._searchToursButton = page.getByRole('button', { name: 'Найти туры' });
    }

    // Open pages ------------------------------------------------------------------------

    async openMainPage() {
        await this.mainPage.goto('https://ozon.ru')
    }

    async openTravelPage() {
        await this.mainPage.goto('https://ozon.ru/travel')
    }

    async openToursPage() {
        await this.mainPage.goto('https://ozon.ru/travel/tours')
    }

    // Actions ------------------------------------------------------------------------

    async clickOnGoToTravelButton() {
        await this._goToTravelButton.click()
    }

    async clickOnGoToToursTab() {
        await this._goToToursTab.click();
    }

    async clickOnField(type: 'from' | 'to' | 'calendar' | 'nights' | 'tourists') {
        if (type === 'from') {
            await this._fromField.click();
        } else if (type === 'to') {
            await this._toField.click();
        } else if (type === 'calendar') {
            await this._dateField.click();
        } else if (type === 'nights') {
            await this._nightsField.click();
        } else {
            await this._touristsField.click();
        }
    }

    async chooseDirectionVariant() {
        await this._cities.nth(1).click();
    }

    async applyToggle() {
        await this._toggle.click();
    }

    async decreaseTourists(buttonIndex = 0) {
        await this._quantityButtons.nth(buttonIndex).click();
    }

    // Expects ------------------------------------------------------------------------

    async expectHeadingIsExist() {
        await expect(this._pageHeading).toBeVisible();
        await expect(this._pageHeading).toHaveText('Поиск туров');
    }

    async expectFromFieldIsExist(state: 'default' | 'changed') {
        await expect(this._fromField).toBeVisible();
        await expect(this._fromField).toHaveText('Откуда');
        if (state === 'default') {
            await expect(this._fromField).toHaveValue('Москва');
        } else {
            await expect(this._fromField).toHaveValue('Минск');
        }
    }

    async expectToFieldIsExist(state: 'default' | 'changed') {
        await expect(this._toField).toBeVisible();
        await expect(this._toField).toHaveText('Страна или город');
        if (state === 'default') {
            await expect(this._toField).toHaveValue('Египет');
        } else {
            await expect(this._toField).toHaveValue('Турция');
        }
    }

    async expectDateFieldIsExist() {
        await expect(this._dateField).toBeVisible();
        await expect(this._dateField).toContainText('Дата вылета');
    }

    async expectNightsFieldIsExist() {
        await expect(this._nightsField).toBeVisible();
        await expect(this._nightsField).toContainText('Количество ночей');
        await expect(this._nightsField).toContainText('7 ночей');
    }

    async expectTouristsFieldIsExist() {
        await expect(this._touristsField).toBeVisible();
        await expect(this._touristsField).toHaveText('Туристы');
        await expect(this._touristsField.locator('input')).toHaveValue('2 туриста');
    }

    async expectSearchToursButtonIsExist() {
        await expect(this._searchToursButton).toBeVisible();
        await expect(this._searchToursButton).toHaveText('Найти туры');
    }

    async expectDirectionFieldDropdownIsExist() {
        await expect(this._fieldDropdown).toBeVisible();
        await expect(this._cities).toHaveCount(10);
    }

    async expectCalendarDropdownIsExist() {
        await expect(this._fieldDropdown).toBeVisible();
        await expect(this._weekDays).toHaveCount(7)
        await expect(this._months).toHaveCount(13)
        await expect(this._toggleBlock).toBeVisible();
    }

    async expectDateToggleIsApplied() {
        await expect(this._dateField.locator('div').nth(3)).toHaveAttribute('data-day-round', '±2');
    }

    async expectNightsToggleIsApplied() {
        await expect(this._nightsField.locator('[class="aa3s"]')).toHaveAttribute('data-night-round', '±2');
    }

    async expectNightsDropdownIsExist() {
        await expect(this._fieldDropdown).toBeVisible();
        await expect(this._nightsHeading).toBeVisible();
        await expect(this._nightsSlider).toBeVisible();
        await expect(this._nightsSubtitle).toBeVisible();
        await expect(this._nightsDescription).toBeVisible();
        await expect(this._toggle).toBeVisible();
    }

    async expectTouristsDropdownIsExist() {
        await expect(this._fieldDropdown).toBeVisible();
        await expect(this._touristsHeading).toBeVisible();
        await expect(this._adults).toBeVisible();
        await expect(this._adultsDescription).toBeVisible();
        await expect(this._children).toBeVisible();
        await expect(this._childrenDescription).toBeVisible();
        await expect(this._quantityButtons).toHaveCount(4);
        await expect(this._quantityValues).toHaveCount(2);
        await expect(this._quantityValues.nth(0)).toHaveText('2');
        await expect(this._quantityValues.nth(1)).toHaveText('0');
    }

    async expectTouristsNumberIsCorrect() {
        await expect(this._quantityValues.nth(0)).toHaveText('1');
        await expect(this._touristsField.locator('input')).toHaveValue('1 турист');
    }
}
