function intToRoman(num) {
    // Define the Roman numeral symbols and their values
    const romanSymbols = [
        ['M', 1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ];

    let result = '';

    // Iterate over the symbols
    for (let [roman, value] of romanSymbols) {
        // Subtract the value from num and append the symbol to result
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }

    return result; 
}

// Add event listener to the button
document.getElementById('convertBtn').addEventListener('click', function () {
    const inputNum = parseInt(document.getElementById('numberInput').value);
    if (isNaN(inputNum) || inputNum < 0 || inputNum > 100000) {
        document.getElementById('result').innerText = 'Please enter a valid number between 0 and 100000.';
    } else {
        const result = intToRoman(inputNum);
        document.getElementById('result').innerText = result;
    }
});