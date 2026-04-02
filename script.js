function convertToRoman(num) {
  // Handle 0 explicitly
  if (num === 0) return "0";  // or "" if problem expects empty for 0

  // Define subtractive rules: largest value first
  const values = [
    100000, 90000, 50000, 40000,
    10000,  9000,  5000,  4000,
    1000,    900,   500,   400,
    100,      90,    50,    40,
    10,        9,     5,     4, 1
  ];

  const symbols = [
    "C̅M̅", "X̅C̅M̅", "L̅", "X̅L̅",
    "X̅",   "I̅X̅",  "V̅",  "I̅V̅",
    "M",   "CM",  "D",  "CD",
    "C",   "XC",  "L",  "XL",
    "X",   "IX",  "V",  "IV", "I"
  ];

  let result = "";

  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += symbols[i];
      num -= values[i];
    }
  }

  return result;
}