/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const aLength = a.length;
    const bLength = b.length;
    
    let maxLength;
    
    if(aLength > bLength) {
        maxLength = aLength;
    }
    else {
        maxLength = bLength;
    }
    
    const numbers = {
        "0": 0,
        "1": 1
    };
    
    let aIndex = aLength - 1, bIndex = bLength - 1;
    
    let sum = "";
    
    for(let i = maxLength - 1, charA = "", charB = "", carryOver = "0", elem = 0; i >= 0; i--) {
        if(aIndex >= 0) {
            charA = a.charAt(aIndex);
        }
        
        if(bIndex >= 0) {
            charB = b.charAt(bIndex);
        }
        
        elem = ((aIndex >= 0) ? numbers[charA] : 0) +
               ((bIndex >= 0) ? numbers[charB] : 0) +
               numbers[carryOver];
        
        if(elem >= 2) {
            elem -= 2;
            carryOver = "1";
        } 
        else {
            carryOver = "0";
        }
        
        sum = `${elem}` + sum;
        
        if(i === 0 && carryOver === "1") {
            sum = "1" + sum;
        }
        
        aIndex--;
        bIndex--;
    }
    
    return sum;
};
