/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
  /**
    Constraints
    Array Length [1, 500]
    
    
    if given a string, check if possible to reorder the characters, having always different adjacent characters.
 */
    const n = s.length;
    let arr = s.split('');
    
    if(n > 1) {
        let memo = {};
        
        for(let i=0; i<n; i++) { //O(n)
            if(memo[arr[i]] === undefined) {
                memo[arr[i]] = 1;
            }
            else {
                memo[arr[i]]++;
            }
        }
        
        let memoArr = Object.entries(memo); //O(n)
        
        let start = 0;
        
        while(memoArr.length !== 0) {  //O(nˆ2)
            const [character, occurrence] = memoArr[0];
            if(!canCreateString(occurrence, n)) {
                return "";
            } 
            
            
            for(let i = start; i < occurrence+1;i = i+2) {
                arr[i] = character;
            }
            memoArr.splice(0, 1);
            start++;
        } 
    }
    const diffAdjCharacters = arr.join("");
        
    return diffAdjCharacters;
};

const canCreateString = (occurrenceLength, totalLength) => { // O(1)
    return !(occurrenceLength === totalLength || occurrenceLength === (totalLength - Math.floor(totalLength/2) + 1));
}
