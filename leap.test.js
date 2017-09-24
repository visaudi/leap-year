let {store} = require("./leap-store.js");
const {changeYear} = require("./change-leap-year-action");

test("It checks something basic.", function () {
    store.dispatch(changeYear(1997));
    expect(store.getState().isLeap).toBe(false);
});
