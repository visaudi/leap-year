const {createStore} = require("redux");
const {checkLeapYear} = require("./leap-year-reducer");

let store = createStore(checkLeapYear);
module.exports.store = store;
