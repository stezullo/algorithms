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
    else { // 10 or upper
        let counter = 0;
        let divisor = 0;

        while(true) {
            divisor = 10 ** counter;
            if(divisor >= x) {
                // 1 10 100 1000 ...
                if(divisor - 1 >= x) {
                    --counter;
                    divisor = 10 ** counter;
                }
                break;
            }
            ++counter;
        }
        
        let arr = [];
        for(let i = counter; i >= 0; i--) {
            arr.push(~~(x / divisor));
            while(x >= divisor) {
                x -= divisor;
            }
            divisor = ~~ (divisor / 10);
        }
        
        for(let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
            if(arr[i] !== arr[j]) {
                return false;
            } 
        }
        return true;
    }
};
