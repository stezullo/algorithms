var countServers = function(grid) {
    if(!grid) return 0;
    
    let counter = 0;
    let rows = {}, cols = {};
    
    grid.forEach((row, i) => {
        row.forEach((value, j) => {
             if(value === 1) {
                rows[i] = (rows[i] === undefined) ? 1 : rows[i] + 1;
                cols[j] = (cols[j] === undefined) ? 1 : cols[j] + 1;
             }
        })
    });
    
    grid.forEach((row, i) => {
        row.forEach((value, j) => {
             if(value === 1 && (rows[i] > 1 || cols[j] > 1)) {
                counter++;
             }
        })
    });
    
    
    return counter;
};
