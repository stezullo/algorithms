/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let nString = "";
    let k = n, sum = 0, i = 0, digit = 0;
    let memo = {};
    while(true) {
        nString = k.toString();
        sum = 0;
        for(i = 0; i < nString.length; i++) {
            digit = parseInt(nString.charAt(i));
            digit *= digit;
            sum += digit;
        }
        console.log(sum);
        if(sum === 1) {
            return true;
        }
        else {
            if(memo[sum] != null) {
                return false;
            }
            else {
                memo[sum] = 1;
                k = sum.toString();    
            }
        }
    }
};
