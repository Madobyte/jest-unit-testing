export const analyzeArray = (array) => {
  const analysis = {};

  if (!Array.isArray(array)) return "Not an array!";

  const newArray = getIntegers(array);
  if (newArray.length === 0) return "Array does not contain integers!";

  /* Average */
  const average = newArray.reduce(
    (average, current) => (average + current) / 2
  );
  analysis["average"] = average;

  /* Minimum Value */
  const min = newArray.reduce((acc, curr) => (acc < curr ? acc : curr));
  analysis["min"] = min;

  /* Maximum Value */
  const max = newArray.reduce((acc, curr) => (acc > curr ? acc : curr));
  analysis["max"] = max;

  /* Array Length */
  analysis["length"] = newArray.length;

  return analysis;
};

const isNumber = (int) => {
  return typeof int === "number" && !isNaN(int);
};

const getIntegers = (array) => {
  const integerArray = [];
  array.map((int) => {
    if (isNumber(int) && isFinite(int)) integerArray.push(int);
  });
  return integerArray;
};
