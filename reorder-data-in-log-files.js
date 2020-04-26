/**
 * @param {string[]} logs
 * @return {string[]}
 */
const reorderLogFiles = (logs) => {
    const n = logs.length;
    
    let digitLogs = [];
    let letterLogs = [];
    
    for(let i = 0, identifier = "", restOfLog = "", indexOfSpace = -1, digit; i < n; i++) {
        indexOfSpace = logs[i].indexOf(" ");
        
        identifier = logs[i].substring(0, indexOfSpace + 1);
        restOfLog = logs[i].substring(indexOfSpace + 1, logs[i].length);
        
        // is a number
        if(restOfLog.charAt(0) <= "9") {
            digitLogs.push(logs[i]);
        }
        else {
            letterLogs.push({key: restOfLog, value: identifier});
        }
    }
    
    letterLogs.sort((a, b) => {        
        if(a.key < b.key) {
            return -1;
        }
        else if(a.key === b.key) {
            if(a.value < b.value) {
                return -1;
            }
            else if(a.value === b.value) {
                return -1;
            }
            else {
                return 1;   
            }
        }
        else {
            return 1;
        }
    });
    
    letterLogs = letterLogs.map(letterLog => letterLog.value + letterLog.key);
    
    return [...letterLogs, ...digitLogs];
};
