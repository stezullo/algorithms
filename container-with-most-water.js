/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0, j = height.length - 1, max = -1, elem = 0;
        
    while(i < j) {
        elem = ((height[i] <= height[j]) ? height[i] : height[j]) * (j - i);
            
        if(elem > max) {
            max = elem;
        }
            
        if(height[i] <= height[j]) {
            ++i;
        }
        else if(height[i] > height[j]){
            --j;
        }
    }
        
    return max;
};
