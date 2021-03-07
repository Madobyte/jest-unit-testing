export const caesarCipher = (string, shift) => {
  const shiftedStringArr = [];

  if (!isNumber(shift) || shift === 0) return "Input valid shift value!";
  if (isNumber(string)) return "Input valid string!";

  /* Handles negative shift value */
  if (shift < 0 && shift >= -26) return caesarCipher(string, shift + 26);
  else if (shift < -26) return caesarCipher(string, (shift % 26) + 26);

  /* Main Logic */
  string.split("").map((char) => {
    const code = char.charCodeAt();

    /* Uppercase Characters */
    if (code >= 65 && code <= 90) {
      const newCode = ((code - 65 + shift) % 26) + 65;
      return shiftedStringArr.push(String.fromCharCode(newCode));
    } else if (code >= 97 && code <= 122) {
      /* Uppercase Characters */
      const newCode = ((code - 97 + shift) % 26) + 97;
      return shiftedStringArr.push(String.fromCharCode(newCode));
    }
    return shiftedStringArr.push(char);
  });

  return shiftedStringArr.join("");
};

const isNumber = (int) => {
  return typeof int === "number" && !isNaN(int);
};
