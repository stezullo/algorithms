/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const n = nums.length;
    let solution = [];
    let obj = {};
    
    if(n >= 3) {
        // O(n^2)
        nums.sort((a,b) => a - b);
        if(nums[0] === 0 && nums[n-1] === 0) {
            solution.push([0,0,0]);
        }
        else {
            for(let i = 0; i < n - 2; i++) {
                let j = i+1;
                let z = n - 1;
                let el = nums[i];
                while(j < z) {
                    if(nums[j] + nums[z] < -nums[i]) {
                        j++;
                    }
                    else if(nums[j] + nums[z] > -nums[i]) {
                        z--;
                    }
                    else if(nums[j] + nums[z] === -nums[i]){
                        let item = [nums[i], nums[j], nums[z]];
                        if(obj[item] == null){
                            obj[item] = item;
                            solution.push(item);
                        }
                        j++;
                    }
                }
            }
        }
    } 
    return solution;
};
