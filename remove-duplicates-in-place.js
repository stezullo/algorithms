var removeDuplicates = function(nums) {
    if(nums.length !== 0 && nums.length !== 1) {
        for(let i = 1; i < nums.length;) {
            if(nums[i] === nums[i-1]) {
               nums.splice(i, 1);
            }
            else {
                ++i;
            }
        }
    }
};
