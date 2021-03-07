import { analyzeArray } from "../code/analyzeArray";

test("Recognizes if input is not an array", () => {
  expect(analyzeArray("this is not an array")).toBe("Not an array!");
});

test("Recognizes if array is empty", () => {
  expect(analyzeArray([])).toBe("Array does not contain integers!");
});

test("Recognizes if array does not contain integers", () => {
  expect(analyzeArray(["html", "css", "javascript", "reactjs", "jest"])).toBe(
    "Array does not contain integers!"
  );
});

test("Outputs average", () => {
  expect(analyzeArray([1])).toEqual({ average: 1, min: 1, max: 1, length: 1 });
});

test("Outputs minimum and maximum value", () => {
  expect(analyzeArray([1, 2])).toEqual({
    average: 1.5,
    min: 1,
    max: 2,
    length: 2,
  });
});

test("Outputs analysis when array has non-integer elements", () => {
  expect(analyzeArray([1, 2, "string"])).toEqual({
    average: 1.5,
    min: 1,
    max: 2,
    length: 2,
  });
});
