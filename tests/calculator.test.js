import { calculator } from "../code/calculator";

const { add, subtract, multiply, divide } = calculator;

/* add() */
test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("adds two zeros to equal 0", () => {
  expect(add(0, 0)).toBe(0);
});

test("adds negative and positive integers", () => {
  expect(add(10, -5)).toBe(5);
});

test("adds two negative integers", () => {
  expect(add(-5, -5)).toBe(-10);
});

/* subtract() */
test("subtracts an integer from a larger integer", () => {
  expect(subtract(10, 5)).toBe(5);
});

test("subtracts a larger integer from a smaller integer", () => {
  expect(subtract(5, 10)).toBe(-5);
});

test("subtracts two negative integers", () => {
  expect(subtract(-5, -5)).toBe(0);
});

/* mutliply() */
test("multiplies two positive integers", () => {
  expect(multiply(5, 5)).toBe(25);
});

test("multiplies two negative integers", () => {
  expect(multiply(-5, -5)).toBe(25);
});

test("multiplies a negative integer to a positive integer", () => {
  expect(multiply(-5, 5)).toBe(-25);
});

/* divide() */
test("divides a large integer by a smaller integer", () => {
  expect(divide(10, 5)).toBe(2);
});

test("divides a small integer by a larger integer", () => {
  expect(divide(5, 10)).toBe(0.5);
});

test("divides a large integer by an integer less than 0", () => {
  expect(divide(10, 0.5)).toBe(20);
});
