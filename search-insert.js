var searchInsert = function(nums, target) {
    
    let indexOfTarget = nums.indexOf(target);
    
    if(indexOfTarget < 0) {
        let indexOfTargetAssigned = false;
        nums.forEach((num, index) => {
            if(target <= num && !indexOfTargetAssigned) {
                console.log(num);
                indexOfTarget = index;
                indexOfTargetAssigned = !indexOfTargetAssigned;
            } 
        });
        if(!indexOfTargetAssigned) {
            indexOfTarget = nums.length;
        }
    }
    return indexOfTarget;    
};
