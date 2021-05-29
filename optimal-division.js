/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
    const n = nums.length;
    
    if(n === 1 || n === 2) {
        return nums.join("/");
    }
    else {
        let str = "";
        let valueStr = "";
        nums.forEach((value, index) => {
           valueStr = ""+value;
           if(index === 0) {
               str += valueStr + "/(";
           }
            else if(index === n - 1) {
                 str += valueStr + ")";
            }
            else {
                 str += valueStr + "/";
            }
        });
        
        return str;
    }
};
