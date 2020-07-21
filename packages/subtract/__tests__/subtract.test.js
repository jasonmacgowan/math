"use strict";

const subtract = require("..");

describe("subtract", () => {
  it("differences arguments", () => {
    expect(subtract(1, 2, 3)).toBe(-4);
  });
});
