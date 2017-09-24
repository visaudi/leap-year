let {store} = require("./leap-store.js");
const {changeYear} = require("./change-leap-year-action");

test("It checks a year which is not a leap year.", function () {
    store.dispatch(changeYear(1997));
    expect(store.getState().isLeap).toBe(false);
});

test("A year that is a normal leap year", function () {
    store.dispatch(changeYear(2004));
    expect(store.getState().isLeap).toBe(true);
});

test("A normal leap year is skipped every 100 years.", function () {
    store.dispatch(changeYear(1900));
    expect(store.getState().isLeap).toBe(false);
});
