const symbols = [
  ['M', 1000], 
  ['D', 500], 
  ['C', 100], 
  ['L', 50], 
  ['X', 10], 
  ['V', 5], 
  ['I', 1]
];

function convertToRoman(num) {
  if (num === 0) return '';
  let result = '';
  for (let [symbol, value] of symbols) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}

document.getElementById('convert-btn').addEventListener('click', function() {
  const input = document.getElementById('number');
  const output = document.getElementById('output');
  const num = parseInt(input.value);
  
  if (isNaN(num) || num < 0 || num > 100000) {
    output.textContent = 'Please enter a number between 0 and 100000.';
    return;
  }
  
  output.textContent = convertToRoman(num);
});
