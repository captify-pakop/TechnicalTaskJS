const _ = require('lodash');

const Page = require('./Page');

class ResultPage extends Page {

    constructor() {
        super();
        this.addresses = "//div[contains(@class,'address')]";
    }

    getAddresses() {
        const addresses = [];
        super.waitUntilClickable(this.addresses);
        _.forEach(super.getArrayOfElements(this.addresses), (address) => {
            addresses.push(address.getText());
        });
        return addresses;
    }

}

module.exports = ResultPage;

