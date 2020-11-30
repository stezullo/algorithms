var removeElement = function(nums, val) {
    let numsLength = nums.length;
    if(numsLength !== 0) {
        for(let i=0; i < numsLength;) {
            if(nums[i] === val) {
                nums.splice(i, 1);
                --numsLength;
            }
            else {
                i++;
            }
        }
    }
    return numsLength;
};
