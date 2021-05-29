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
        
        nums.forEach((value, index) => {
           if(index === 0) {
               str += `${value}/(`;
           }
            else if(index === n - 1) {
                 str += `${value})`;
            }
            else {
                 str += `${value}/`;
            }
        });
        
        return str;
    }
};
