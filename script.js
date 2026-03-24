 function intToRoman(num) {
            // Define the Roman numeral symbols and their values
            const romanSymbols = [
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
            
            let result = '';

            for (let [roman, value] of romanSymbols) {
                while (num >= value) {
                    result += roman; 
                    num -= value;    
                }
            }

            return result; 
        }

        // Add event listener to the button
        document.getElementById('convertBtn').addEventListener('click', function() {
            const inputNum = parseInt(document.getElementById('numberInput').value);
            const result = intToRoman(inputNum);
            document.getElementById('result').innerText = result;
        });