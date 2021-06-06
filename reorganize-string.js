/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(S) {
    let hash = {};
    
    // Assign all characters in a hashmap
    for(let c of S){
        // Assign 1 or increment 1 depending if present or not.
        hash[c] = hash[c] + 1 || 1; 
    } 

    const sort = Object.keys(hash).sort((a,b)=>hash[b] - hash[a]);
    
    let differentAdjacent = Array(S.length).fill('');
    
    let index = 0;

    for (let i = 0;i<sort.length;i++) {
        const occurrence = hash[sort[i]];
        if (occurrence > parseInt((S.length + 1)/2)) return "";
        for (let j = 0;j < occurrence;j++) {
            if (index >= S.length) index = 1;
            differentAdjacent[index] = sort[i];
            index += 2;
        }
    } 
    return differentAdjacent.join('');
};
