/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    if(n === 1 || m === 1) {
        return 1;
    }
    else {
        const result = uniquePathsMemoized(m, n, {
            '(1,1)': 1
        });
        return result;
    }
};

var uniquePathsMemoized = (m, n, memo) => {
    const key = `(${m},${n})`;
    
    if(m === 1 || n === 1) {
        memo[key] = 1;
    }
    else if(!memo[key]) {
        
        memo[key] = 0;
        
        if(m > 1) {
            memo[key] += uniquePathsMemoized(m-1, n, memo);
        }
        
        if(n > 1) {
            memo[key] += uniquePathsMemoized(m, n-1, memo);
        }
    
    }
    
    return memo[key];
} 
