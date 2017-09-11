const _ = require('lodash');
const expect = require('chai').expect;

const HomePage = require('../pageObject/HomePage');
const testData = require('../testData/bookingCom');
const wdioConf = require('./../../../wdio.conf');

const container = {};

describe('Booking.com tests', () => {
    before(() => {
        browser.timeouts('implicit', wdioConf.config.timeoutsImplicitWait);
        browser.windowHandleSize(wdioConf.config.windowDimension);
        container.homePage = new HomePage();
    });

    it('VerifyLocation', () => {
        container.homePage.open();
        container.homePage.setKeyword(testData.verifyLocation.keyWord);
        container.homePage.setCheckInDate(testData.verifyLocation.checkInMonthAndYear,
            testData.verifyLocation.checkInDay);
        container.homePage.setCheckOutDate(testData.verifyLocation.checkOutMonthAndYear,
            testData.verifyLocation.checkOutDay);
        const resultPage = container.homePage.submitRequest();
        _.forEach(resultPage.getAddresses(), (address) => {
            expect(address).to.have.string(testData.verifyLocation.keyWord);
        })
    });
});

