function convertToRoman(num) {
  if (num <= 0) return "";

  // Combined symbols and subtractive pairs
  const lookup = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let roman = "";

  for (let i = 0; i < lookup.length; i++) {
    while (num >= lookup[i][1]) {
      roman += lookup[i][0];
      num -= lookup[i][1];
    }
  }

  return roman;
}
