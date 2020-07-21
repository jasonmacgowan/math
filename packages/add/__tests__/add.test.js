"use strict";

const add = require("..");

describe("add", () => {
  it("sums arguments", () => {
    expect(add(1, 2, 3)).toBe(6);
  });
});
