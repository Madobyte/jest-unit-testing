import { caesarCipher } from "../code/caesarCipher";

test("Recognizes if shift value is not an integer", () => {
  expect(caesarCipher("string", "another string")).toBe(
    "Input valid shift value!"
  );
});

test("Recognizes if input is not a string", () => {
  expect(caesarCipher(25000, 1)).toBe("Input valid string!");
});

test("Recognizes if shift value is 0", () => {
  expect(caesarCipher("string", 0)).toBe("Input valid shift value!");
});

test("Tests if shift value is positive", () => {
  expect(caesarCipher("hello", 10)).toBe("rovvy");
});

test("Tests if shift value is negative", () => {
  expect(caesarCipher("hello", -10)).toBe("xubbe");
});

test("Tests string with different cases", () => {
  expect(caesarCipher("hElLo!", -10)).toBe("xUbBe!");
});

test("Tests string with punctuations", () => {
  expect(caesarCipher("hello!", -10)).toBe("xubbe!");
});

test("Tests string with punctuations", () => {
  expect(caesarCipher("hello!", -10)).toBe("xubbe!");
});

test("Tests multiple-word strings", () => {
  expect(caesarCipher("Unit testing with Jest is Awesome!", -10)).toBe(
    "Kdyj juijydw myjx Zuij yi Qmuiecu!"
  );
});
