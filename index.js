_ = require('lodash');
alwaysTrue = () => true; //this function is expected to return true alwayes
legitString = (o) => _.isString(o) && o.length > 0;

module.exports = {
    alwaysTrue,
    legitString
}

