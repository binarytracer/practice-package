import { add, subtract } from "../src";

describe("Math functions", () => {
  describe("add", () => {
    it("should add two positive numbers correctly", () => {
      expect(add(1, 2)).toBe(3);
    });

    it("should handle negative numbers", () => {
      expect(add(-1, -2)).toBe(-3);
    });

    it("should handle zero", () => {
      expect(add(0, 5)).toBe(5);
    });
  });

  describe("subtract", () => {
    it("should subtract two positive numbers correctly", () => {
      expect(subtract(3, 2)).toBe(1);
    });

    it("should handle negative numbers", () => {
      expect(subtract(-1, -2)).toBe(1);
    });

    it("should handle zero", () => {
      expect(subtract(5, 0)).toBe(5);
    });
  });
});
