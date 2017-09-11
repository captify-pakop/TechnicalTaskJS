const wdioConf = require('./../../../wdio.conf');
const XpathHelper = require('../utilities/XpathHelper.js');


class Page {
    constructor() {
        this.browser = browser;
        this.xpathHelper = XpathHelper;
    }

    open(path = '') {
        this.browser.url(`/${path}`);
    }

    getArrayOfElements(locator) {
        return this.browser.elements(locator).value;
    }

    getWebElement(locator) {
        return this.browser.element(locator);
    }

    fillInInput(value, locator) {
        this.waitUntilClickable(locator);
        const element = this.getWebElement(locator);
        element.clearElement();
        element.setValue(value);
    }

    waitUntilClickable(selector) {
        this.browser.waitUntil(() => {
                return this.browser.isExisting(selector);
            }
            , wdioConf.config.retryTimeout,
            wdioConf.config.retryErrorMessage, wdioConf.config.retryIntervalTime);
    }

    waitTillVisibleThenClick(locator) {
        this.browser.waitUntil(() => {
                return this.browser.isExisting(locator);
            }
            , wdioConf.config.retryTimeout,
            wdioConf.config.retryErrorMessage, wdioConf.config.retryIntervalTime);
        this.getWebElement(locator).click();
    }

}

module.exports = Page;
