const wordBreak = function(s, wordDict) {
    const sLength = s.length;
    const findWord = function(start, memo) {
        if(start == s.length)
            return true;
        
        if(memo[start] != null) {
            return memo[start];
        }
        
        for(let i=start; i< sLength; i++){ // O(n)
            if(wordDict.includes(s.substring(start, i+1)) && findWord(i+1, memo)){
                memo[start]=true;
                return memo[start];   
            }
        }
        memo[start]=false;
        return memo[start];
    }
    
    
    return findWord(0, {});
};
