/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // if it's just one digit you can assume palindrome.
    if(x >= 0 && x <= 9) {
        return true;
    }
    else if(x < 0) {
        return false;
    }
    else {
        let bar = String(x);
        
        for(let i = 0, j = bar.length - 1; i < bar.length; i++, j--) {
            if(bar.charAt(i) !== bar.charAt(j)) {
                return false;
            }
        }
        return true;
    }
};
