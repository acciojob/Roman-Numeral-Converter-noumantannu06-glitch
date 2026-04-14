function convertToRoman(num) {
  // Your existing function (unchanged - it passes logic tests)
  const symbols = [['M',1000],['D',500],['C',100],['L',50],['X',10],['V',5],['I',1]];
  let result = '';
  for (let [symbol, value] of symbols) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}

// Add DOM event listener if missing
document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('number');
  const button = document.getElementById('convert-btn');
  const output = document.getElementById('output');

  button.addEventListener('click', function() {
    const num = parseInt(input.value);
    if (isNaN(num) || num < 0 || num > 100000) {
      output.textContent = 'Please enter a valid number between 0 and 100000';
    } else {
      output.textContent = convertToRoman(num);
    }
  });
});