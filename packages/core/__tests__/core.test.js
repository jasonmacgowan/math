"use strict";

const core = require("..");

describe("core", () => {
  it("has operations", () => {
    function noop() {}
    expect(typeof core.add).toBe(typeof noop);
  });

  describe("add", () => {
    it("sums arguments", () => {
      expect(core.add(1, 2, 3)).toBe(6);
    });
  });

  describe("subtract", () => {
    it("differences arguments", () => {
      expect(core.subtract(1, 2, 3)).toBe(-4);
    });
  });
});
