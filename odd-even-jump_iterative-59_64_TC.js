/**
 * @param {number[]} A
 * @return {number}
 */
const oddEvenJumps = (A) => {
    let goodIndexes = 0;
    
    for(let i = 0, isIndexGood = false; i < A.length; i++) {
        isIndexGood = checkIfIndexIsGood(A.slice(i, A.length));
        
        if(isIndexGood) {
            ++goodIndexes;
        }
    }
    
    return goodIndexes;
};

const checkIfIndexIsGood = (A) => {
    let jump = 1;
    
    let IS_ODD = false;
    let restOfElements = [];
    
    let i = 0, j = 1;
    
    if(i === A.length - 1) {
        return true;
    }
    else {
        while(j !== A.length) {
            IS_ODD = jump % 2 !== 0;
            
            if((IS_ODD && A[i] <= A[j]) || (!IS_ODD && A[i] >= A[j])) {

                restOfElements = A.slice(j, A.length);
                
                if(isRestOfElementsComplaint(
                        restOfElements,
                        A[i],
                        IS_ODD
                    )) {

                    i = j;
                    ++jump;

                    if(i === A.length - 1) {
                        return true;
                    }
                } 
            }
            
            ++j;
        }
        
        return false;
    }
}

const isRestOfElementsComplaint = (A, elementToCompare, IS_ODD) => {
    if(A.length > 0) {
        let candidate = A[0];
        
        for(let j = 1; j < A.length; j++) {
            if( (IS_ODD && A[j] >= elementToCompare && candidate > A[j])
                || (!IS_ODD && A[j] <= elementToCompare && candidate < A[j])
              ) {
                return false;
            }
        }    
    }
    
    return true;
}
