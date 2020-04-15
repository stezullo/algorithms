/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
    const MAX_INTEGER = 2147483647;
    const MIN_INTEGER = -2147483648;
    
    const xString = x.toString();
    const n = xString.length;
    
    let startIndex = 0;
    let xStringReversed = "";
    
    if(xString.charAt(0) === "-") {
        startIndex = 1;
        xStringReversed = "-";
    }
    
    for(let i = n - 1; i >= startIndex; i--) {
        if(i === n - 1 && xString.charAt(i) === "0") {
            continue;
        }
        else {
            xStringReversed += xString.charAt(i);  
        }
    }
    
    const xReversed = parseInt(xStringReversed);
    
    if(MIN_INTEGER <= xReversed && xReversed <= MAX_INTEGER) {
        return xReversed;
    }
    else {
        return 0;
    }
};
