/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    const n = A.length;
    
    if(n === 0) {
        return [];
    }
    
    let arr = A.map(elem => elem * elem);
    
    console.log(arr);
    
    return arr.sort((a, b) => {
        if(a <= b) {
            return -1;
        }
        else {
            return 1;
        }
    });
};
