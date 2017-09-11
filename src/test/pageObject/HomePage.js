const Page = require('./Page');
const ResultPage = require('./ResultPage');
const CalendarHelper = require('../utilities/CalendarHelper');

class HomePage extends Page {

    constructor() {
        super();
        this.calendarHelper = new CalendarHelper();

        this.searchInput = this.xpathHelper.byId('ss');
        this.submmit = this.xpathHelper.byClassName('sb-searchbox__button   ', 'button');
        this.firstOption = ".//li[@data-i='0']";
    }

    open() {
        super.open();
    }

    setKeyword(searchValue) {
        super.fillInInput(searchValue, this.searchInput);
        super.waitTillVisibleThenClick(this.firstOption);
    }

    setCheckInDate(monthAndYear, day) {
        this.calendarHelper.setDate(monthAndYear, day);
    }

    setCheckOutDate(monthAndYear, day) {
        this.calendarHelper.clickOnCheckoutCalendar();
        this.calendarHelper.setDate(monthAndYear, day);
    }

    submitRequest() {
        super.waitTillVisibleThenClick(this.submmit);
        return new ResultPage();
    }
}

module.exports = HomePage;

