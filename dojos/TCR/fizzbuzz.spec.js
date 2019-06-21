const fizzbuzz = require("./fizzbuzz");

test("when given 0 to fizzbiuzz should return 0", () => {
    expect(fizzbuzz(0))
        .toEqual("0");
})