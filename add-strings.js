/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = (num1String, num2String) => {
    return getSumFromNumStrings(num1String, num2String);
};

const getSumFromNumStrings = (num1String, num2String) => {
    const minLength = (num1String.length <= num2String.length) ?
          num1String.length : num2String.length;
    
    let diffLength = 0;
    let str1 = num1String;
    let str2 = num2String;
    let restString = "";
    
    let sum = "";
    let sumDigit = 0;
    let carryOver = 0;
    
    if(str1.length > minLength) {
        diffLength = str1.length - minLength;
        restString = str1.substring(0, diffLength);
        str1 = str1.substring(diffLength, str1.length);
    }
    else if(str2.length > minLength) {
        diffLength = str2.length - minLength;
        restString = str2.substring(0, diffLength);
        str2 = str2.substring(diffLength, str2.length);
    }
    
    for(let i = minLength - 1, digit1 = 0, digit2 = 0; i >= 0; i--) {
        sumDigit = 0;
        
        digit1 = getNumberFromChar(str1.charAt(i));
        digit2 = getNumberFromChar(str2.charAt(i));
        
        sumDigit = digit1 + digit2 + carryOver;
        
        if(sumDigit >= 10) {
            carryOver = 1;
            sumDigit -= 10;
        }
        else {
            carryOver = 0;
        }
        
        sum = `${sumDigit}${sum}`; 
    }
    
    if(restString.length != 0) {
        // For the rest 
        for(let i = restString.length -1; i >= 0; i--) {
            sumDigit = getNumberFromChar(restString.charAt(i)) + carryOver;

            if(sumDigit >= 10) {
                carryOver = 1;
                sumDigit -= 10;
            }
            else {
                carryOver = 0;
            }

            sum = `${sumDigit}${sum}`;
        }
    }
    
    if(carryOver === 1) {
        sum = `1${sum}`;
    }
    
    return sum;
}


const getNumberFromChar = (str) => {
    const START_OF_NUMBER_CODE = 48;
    
    return str.charCodeAt(0) - START_OF_NUMBER_CODE;
}
