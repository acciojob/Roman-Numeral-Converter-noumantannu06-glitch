function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	function convertToRoman(num) {
  
  if (num === 0) return 'N'; 

  let result = '';

  for (let i = 0; i < romanPairs.length; i++) {
    const symbol = romanPairs[i][0];
    const value = romanPairs[i][1];

    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}


document.getElementById('convertBtn').addEventListener('click', function () {
  const inputEl = document.getElementById('numberInput');
  const outEl = document.getElementById('result');

  let value = parseInt(inputEl.value, 10);

  if (isNaN(value) || value < 0 || value > 100000) {
    outEl.textContent = 'Please enter a number between 0 and 100000.';
    return;
  }

  outEl.textContent = convertToRoman(value);
});

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
