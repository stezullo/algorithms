/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let newIntervals = [];
    
    const n = intervals.length;
    
    // O(nlogn)
    // Simplify the research of interval to merge putting them close one  to the another.
    intervals.sort((a,b) => a[0]- b[0]);
    // Searching for arrays for array to be merged
    for(let i=0; i < n; i++) {
        let [start, end] = intervals[i];
        let j = i+1;
        if(j !== n) {
            for(;j<n;j++) {
                const [startNext, endNext] = intervals[j];

                if(end >= startNext) {
                    if(end < endNext) {
                        end = endNext;
                    }
                }
                else {
                    // incontra un muro ovvero un elemento con startNext > end
                    newIntervals.push([start,end]);
                    i = j-1;
                    break;
                }
            }
            if(j === n) {
                newIntervals.push([start,end]);
                break;
            }
        }
        else {
            newIntervals.push([start,end]);
        }
      
    }
    
    return newIntervals;
};
