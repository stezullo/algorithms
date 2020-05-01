/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    const n = s.length;
    
    if(n === 0 || s === undefined || s === null) {
        return 0;
    }
    
    const romanNumbers = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    };
    
    let sum = 0;
    
    let charString = s.charAt(0);
    
    if(n === 1) {
        return romanNumbers[charString];
    }
    else {
        for(let i = 1, charStringNext = ''; i < n; i++) { 
            charStringNext = s.charAt(i);

            if(romanNumbers[charString] >= romanNumbers[charStringNext]) {
                sum += romanNumbers[charString];
            }
            else {
                sum += romanNumbers[charString + charStringNext];
                charStringNext = s.charAt(++i); 
            }

            if(i !== n-1) {
                charString = charStringNext; 
            }
            else {
                sum += romanNumbers[charStringNext];
            }
        }
    }
    
    return sum;
};
