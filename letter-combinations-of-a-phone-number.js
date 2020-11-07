/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    if(!digits || digits.length === 0) {
        return [];
    }
    else {
        let combinations = [];
        
        let dictionary = {
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z']
        }
    
        const digitsLength = digits.length;
        
        if(digitsLength === 1) {
            return dictionary[digits[0]];
        }
        else {
            
            if(digitsLength === 2) {
                let firstDigitDictionary = dictionary[digits[0]];
                let secondDigitDictionary = dictionary[digits[1]];
                
                firstDigitDictionary.forEach((digitLetter) => {
                    secondDigitDictionary.forEach((secondDigitLetter) => {
                       combinations.push(digitLetter + secondDigitLetter); 
                    });
                });
            }
            else if(digitsLength === 3) {
                let firstDigitDictionary = dictionary[digits[0]];
                let secondDigitDictionary = dictionary[digits[1]];
                let thirdDigitDictionary = dictionary[digits[2]];
                
                firstDigitDictionary.forEach((digitLetter) => {
                    secondDigitDictionary.forEach((secondDigitLetter) => {
                        thirdDigitDictionary.forEach((thirdDigitLetter) => {
                       combinations.push(digitLetter + secondDigitLetter + thirdDigitLetter); 
                        });
                    });
                });
            }
            else {
                let firstDigitDictionary = dictionary[digits[0]];
                let secondDigitDictionary = dictionary[digits[1]];
                let thirdDigitDictionary = dictionary[digits[2]];
                let fourthDigitDictionary = dictionary[digits[3]];

                firstDigitDictionary.forEach((digitLetter) => {
                    secondDigitDictionary.forEach((secondDigitLetter) => {
                        thirdDigitDictionary.forEach((thirdDigitLetter) => {
                            fourthDigitDictionary.forEach((fourthDigitLetter) => {
                            combinations.push(digitLetter + secondDigitLetter + thirdDigitLetter + fourthDigitLetter);
                            });
                        });
                    });
                });
            }
            
            return combinations;
        }
    }
};
