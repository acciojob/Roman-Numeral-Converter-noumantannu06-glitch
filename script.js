const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

function convertToRoman(num) {
  const lookup = [
    ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
    ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
    ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
  ];

  let roman = "";
  let n = num;

  for (let i = 0; i < lookup.length; i++) {
    while (n >= lookup[i][1]) {
      roman += lookup[i][0];
      n -= lookup[i][1];
    }
  }
  return roman;
}

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt)) {
    output.innerText = "Please enter a valid number";
  } else if (inputInt < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (inputInt > 100000) {
    output.innerText = "Please enter a number less than or equal to 100000";
  } else {
    output.innerText = convertToRoman(inputInt);
  }
};

convertBtn.addEventListener('click', checkUserInput);

numberInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') checkUserInput();
});
