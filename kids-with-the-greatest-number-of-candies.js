/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const n = candies.length;
    const max = Math.max(...candies);
    let arr = Array(n).fill(false);
    
    for(let i = 0; i < n; i++) {
        arr[i] = (candies[i] + extraCandies) >= max;
    }
    
    return arr;
};
