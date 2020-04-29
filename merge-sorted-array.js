/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(m === 0 && n !== 0) {
        for(let i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
    }
    else if(m !== 0 && n !== 0){
        for(let i = nums1.length - 1, j = m - 1, k = n - 1; i >= 0; i--) {
            if(j !== -1) {
                if(nums1[j] > nums2[k]) {
                    nums1[i] = nums1[j];
                    nums1[j] = -99999;
                    --j;
                }
                else if(nums1[j] <= nums2[k]) {
                    nums1[i] = nums2[k];
                    --k;
                }
            }
            else {
                nums1[i] = nums2[k];
                --k; 
            }
            
        }
    }
    
    return;     
};
