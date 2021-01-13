var isUgly = function(num) {
    let ugly = true;
    
    if(num === 0) {
        ugly = false;
    }
    else if(num === 1) {
        ugly = true;
    }
    else {
        while(num !== 1) {
            if(num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0) {
                if(num !== 1) {
                    ugly = false;
                }
                break;
            }
            else {
                [2, 3, 5].forEach((div) => {
                   if(num % div === 0) {
                       num /= div;
                   } 
                });
            }
        }
    }
    
    return ugly;
};
