/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) {
        return "";
    }
    else if(strs.length === 1) {
        return strs[0];
    }
    
    let prefix = "";
    let smallestString = "";
    
    //Search for smallest string
    strs.forEach(str => {
        if(!smallestString || str.length < smallestString.length) {
            smallestString = str;
        }
    });
    
    // Check if the array has multiple same small string.
    let otherStrings = strs.filter(str => str !== smallestString);
    
    if(otherStrings.length === 0) {
        return strs[0];
    }
    else {
        for(let i = 0, charToAdd = null, samePos = true; i < smallestString.length; i++) {
            charToAdd = smallestString.charAt(i); 
            for(let j = 0, str = null; j < otherStrings.length; j++) {
                str = otherStrings[j];
                if(charToAdd !== str.charAt(i)) {
                    samePos = false;
                }
            }
            if(samePos) {
                prefix += charToAdd;
            }
            else {
                return prefix;
            }
        }
        return prefix;
    }
    
    
    
};
