import { reverseString } from "../code/reverseString";

test("reverse a single-word string", () => {
  expect(reverseString("engineer")).toBe("reenigne");
});

test("reverse a multiple-word string", () => {
  expect(reverseString("Civil Engineer")).toBe("reenignE liviC");
});

test("reverse a number", () => {
  expect(reverseString(2021)).toBe("1202");
});
