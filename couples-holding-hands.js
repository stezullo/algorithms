/**
 * @param {number[]} row
 * @return {number}
 */
const minSwapsCouples = (row) => {
    const n = row.length;
    let count = 0;
    for(let i = 0; i < n-1; i++) {
        (row[i] % 2 === 0) ?
            count += helper(row, i, row[i]+1) :
            count += helper(row, i, row[i]-1);
        i++;
    }
    return count;
};


const helper = (row, i, value) => {
    let count = 0;
    
    if(row[i+1] !== value) {
        let index = -1;
        const arr = row.slice(i+2);
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] === value) {
                index = i+2+j;
                break;
            }
        }
        
        let swap = row[i+1];
        row[i+1] = row[index];
        row[index] = swap;
        ++count;
    }
    
    return count;
}
