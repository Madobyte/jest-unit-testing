export const reverseString = (string) => {
  if (typeof string !== "string") {
    const number = string;
    return reverseString(number.toString());
  }
  const stringArr = string.split("");
  const reversedStringArr = [];
  stringArr.map((char) => reversedStringArr.unshift(char));
  const reversedString = reversedStringArr.join("");
  return reversedString;
};
