/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = (words, order) => {
    const n = words.length;
    
    for(let i = 0, word = "", wordNext = "", notCheckLength = false,
        minLengthWord = 21;
        i < n - 1;
        i++) {
        word = words[i];
        wordNext = words[i+1];
        
        minLengthWord = (word.length <= wordNext.length) ? word.length : wordNext.length; 
        
        for(let j = 0, flag = false, different = false; j < minLengthWord; j++)  {
            flag = compareByOrder(word.charAt(i), wordNext.charAt(i), order);
            
            if(flag != 0){
                if(flag > 0) {
                    return false;
                }
                else {
                    different = true;
                }
            }
            
            if(different && !notCheckLength) {
                notCheckLength = true; 
            }
        }
            
        if(notCheckLength === false && word.length > wordNext.length) {
            return false;
        }
    }
    
    return true;
};

const compareByOrder = (wordLetter, wordNextLetter, order) => {
    
    // Returns -1, 0, 1 depending on order parameter.
    if(order.indexOf(wordLetter) < order.indexOf(wordNextLetter)) {
        return -1;
    }
    else if(order.indexOf(wordLetter) === order.indexOf(wordNextLetter)) {
        return 0;
    }
    else {
        return 1;
    }
};
