const _ = require('lodash');

class XpathHelper {
    constructor() {
        this.text = _.template("//<%= tag %>[contains(text(),'<%= text %>')]");
        this.elemntId = _.template(".//*[@id= '<%= id %>']");
        this.className = _.template("//<%= tag %>[@class='<%= className %>']");
    }

    byText(text, tag = 'span') {
        return this.text({tag, text});
    }

    byClassName(className, tag = 'div') {
        return this.className({tag, className});
    }

    byId(id) {
        return this.elemntId({id});
    }
}

module.exports = new XpathHelper();
