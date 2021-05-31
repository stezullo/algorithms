/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let goodPairs = 0;
    const n = nums.length;
    
    for(let i=0; i < n-1; i++) {
        for(let j=i+1; j < n; j++) {
            if(nums[i] === nums[j]) {
                goodPairs++;
            }
        }
    }
    
    return goodPairs;
};
