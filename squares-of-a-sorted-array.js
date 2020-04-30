/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    const n = A.length;
    
    if(n === 0) {
        return [];
    }
    else if(n === 1){
        return [A[0] * A[0]];
    }
    else {
        let a = 0, b = 0;
        let ret = [];

        let i = 0, j = n - 1;
        for(; i !== j;) {
            a = A[i] * A[i];
            b = A[j] * A[j];

            if(a > b) {
                ret.unshift(a);
                i++;
            }
            else {
                ret.unshift(b);
                j--;
            }
        }
        
        ret.unshift(A[i] * A[i]);
        
        return ret;
    }
};
