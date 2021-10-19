const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}])).toBe('Bart, Lisa & Maggie')
    expect(joinNames([{name: "Rachel"}, {name: "Marc"}, {name: "Bob"}])).toBe("Rachel, Marc & Bob")
    expect(joinNames([{name: "Rachel"}, {name: "Marc"}, {name: "Bob"}, {name: "Alan"}])).toBe("Rachel, Marc, Bob & Alan")
    expect(joinNames([{name: "Rachel"}, {name: "Marc"}])).toBe("Rachel & Marc")
  });
});
