export const capitalizeString = (string) => {
  if (typeof string !== "string") return "Not a string!";
  return string
    .split(" ")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(" ");
};
