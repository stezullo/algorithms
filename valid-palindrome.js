/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const n = s.length;
    
    if(n === 0 || n === 1) {
        return true;
    }
    
    
    let newString = cleanUp(s, n);
    
    
    return checkPalindrome(newString, newString.length);
};

const cleanUp = (s, n) => {
    let newString = "";
    
    for(let i = 0, characterString = ""; i < n; i++) {
        characterString = s.charAt(i);
        if(
            (characterString >= '0' && characterString <= '9') ||
            (characterString >= 'A' && characterString <= 'Z') ||
            (characterString >= 'a' && characterString <= 'z')
         ) {
            if(characterString >= 'a' && characterString <= 'z') {
                characterString = characterString.toUpperCase();       
            }
            
            newString += characterString;
        }
        else {
            newString += "";
        }
            }
    
    return newString;
}

const checkPalindrome = (s, n) => {
    const mid = (n % 2 !== 0) ? parseInt(n/2) : n/2;
    
    for(let i = 0, j = n-1, c1 = '', c2 = ''; i < mid; i++, j--) {
        c1 = s.charAt(i);
        c2 = s.charAt(j);
        
        if(c1 !== c2) {
            return false;
        } 
    }
    
    return true;
} 
