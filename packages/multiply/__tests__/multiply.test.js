"use strict";

const multiply = require("..");

describe("multiply", () => {
  it("products arguments", () => {
    expect(multiply(1, 2, 3)).toBe(6);
  });
});
