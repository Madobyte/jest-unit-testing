import { capitalizeString } from "../code/capitalizeString";

test("turns hello to Hello", () => {
  expect(capitalizeString("hello")).toBe("Hello");
});

test("turns hello, world! to Hello, World!", () => {
  expect(capitalizeString("hello, world!")).toBe("Hello, World!");
});

test("turns marc angelo p. bambalan to Marc Angelo P. Bambalan", () => {
  expect(capitalizeString("marc angelo p. bambalan")).toBe(
    "Marc Angelo P. Bambalan"
  );
});

test("returns Not a String!", () => {
  expect(capitalizeString(2021)).toBe("Not a string!");
});
