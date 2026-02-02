const { sumNumbers, findMin, findMax, average } = require("../src/numberProcessor");

describe("Number Processor", () => {
  const nums = [1, 2, 3, 4, 5];

  test("calculates sum", () => {
    expect(sumNumbers(nums)).toBe(15);
  });

  test("finds minimum", () => {
    expect(findMin(nums)).toBe(1);
  });

  test("finds maximum", () => {
    expect(findMax(nums)).toBe(5);
  });

  test("calculates average", () => {
    expect(average(nums)).toBe(3);
  });
});