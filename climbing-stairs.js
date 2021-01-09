/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 1) {
        return n;
    }
    else {
        return climbStairsHelper(n, { '0': 1, '1': 1 });
    }
};

const climbStairsHelper = (n, memo) => {
    if(!memo[""+n]) {
        memo[""+n] = climbStairsHelper(n-1, memo) + climbStairsHelper(n-2, memo);
    }
    
    return memo[""+n];
}
