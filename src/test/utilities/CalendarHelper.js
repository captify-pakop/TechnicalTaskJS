const _ = require('lodash');
const wdioConf = require('./../../../wdio.conf');

const Page = require('./../pageObject/Page');

class CalendarHelper extends Page {
    constructor() {
        super();
        this.checkOutLabel = "(//label[contains(text(),'Check-out')])[1]";
        this.checkOutCalendarArrow = "/..//i[@class='sb-date-field__chevron bicon-downchevron']";
        this.forward = "//div[@class='c2-button c2-button-further']";
        this.days = "/../../..//span[@class='c2-day-inner']";
        this.monthnames = this.xpathHelper.byClassName('c2-month-header-monthname', 'th');
    }

    setDate(monthAndYear, day) {
        super.waitUntilClickable(this.monthnames);
        const monthElement = this.checkNeededMonthAndYear(monthAndYear);
        if (!monthElement) {
            this.clickOnForward();
            this.setDate(monthAndYear, day);
        } else {
            this.chooseDay(monthElement, day);
        }
    }

    clickOnForward() {
        super.waitUntilClickable(this.forward);
        _.forEach(super.getArrayOfElements(this.forward), (element) => {
            if (browser.isVisible(`(${this.forward})[${element.index + 1}]`))
                element.click();
        });
    }

    clickOnCheckoutCalendar() {
        super.waitTillVisibleThenClick(`${this.checkOutLabel}${this.checkOutCalendarArrow}`);
    }


    chooseDay(monthElement, day) {
        const monthsDays = `(${monthElement.selector})[${monthElement.index + 1}]${this.days}`;
        _.forEach(super.getArrayOfElements(monthsDays), (element) => {
            if (element.getText().trim() === day) {
                element.click();
            }
        })
    }

    checkNeededMonthAndYear(monthAndYear) {
        const monthsElements = super.getArrayOfElements(this.monthnames);
        return _.find(monthsElements, (element) => {
            const elementText = element.getText();
            return elementText === monthAndYear || elementText.includes(wdioConf.config.yearLimit);
        })
    }
}

module.exports = CalendarHelper;
