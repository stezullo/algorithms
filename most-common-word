/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const paragraphLength = paragraph.length;
    const bannedLength = banned.length;
    
    // Bad formatting cases.
    if(paragraphLength === 0 || paragraph === null || paragraph === undefined) {
        return paragraph;
    }
    
    let searchPosition = 0;
    let newParagraph = "";
    
    paragraph.split(" ").forEach(word => {
        // Check if word contains any punctuation . , ! ? 
        let newWord = word.replace(/[.,\'\/#!?$%\^&\*;:{}=\-_`~()]/g," ");
        
        newWord = newWord.toLowerCase();
        
        if(newWord.charAt(newWord.length - 1) === " ") {
            newWord = newWord.substring(0, newWord.length - 1);    
        }
        
        if(newParagraph === "") {
            newParagraph = newWord;
        }
        else {
            newParagraph += " " + newWord;
        }
    });
    
    // Remove banned words
    let arr = newParagraph.split(" ").filter(word => {
        return !isBannedWord(word, banned);
    });
    
    let maxObj = {};
    
    let max = 1;
    let maxWord = arr[0];
    maxObj[maxWord] = 1;
    
    for(let i = 1; i < arr.length; i++) {
        if(maxObj[arr[i]] != null) {
            ++maxObj[arr[i]];
        }
        else {
            maxObj[arr[i]] = 1;        
        }
        
        if(max <= maxObj[arr[i]]) {
            max = maxObj[arr[i]];
            maxWord = arr[i];
        }
    }
    
    return maxWord;
};

const isBannedWord = (word, bannedWords) => {
    return bannedWords.find(bannedWord => bannedWord === word) != null;
};
