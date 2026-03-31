function intToRoman(num) {
            // Define the Roman numeral symbols and their values
const symbols = [
    ['M', 1000], 
    ['D', 500], 
    ['C', 100], 
    ['L', 50], 
    ['X', 10], 
    ['V', 5], 
    ['I', 1]
  ];
  
  let result = '';
  
  for (let [symbol, value] of symbols) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  
  return result;
}