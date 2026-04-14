function convertToRoman(num) {
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
  
  for (let i = 0; i < symbols.length; i++) {
    const [symbol, value] = symbols[i];
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  
  return result;
}