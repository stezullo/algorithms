const dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]];

const uniquePathsIII = (grid) => {
    const dfs = (r, c) => {
        if(r < 0 || c < 0 || r > m - 1 || c > n - 1 || grid[r][c] < 0) {
            return;
        }
        
        if(grid[r][c] === 2) {
            result += !traversable;
            return;
        }
        
        grid[r][c] = -2;
        --traversable;
        
        for(let [dR, dC] of dirs) {
            dfs(r+dR, c+dC);
        }
        
        grid[r][c] = 0;
        ++traversable;
    }
    
    let result = 0, traversable = 1, sx, sy;
    
    const m = grid.length, n = grid[0].length;
    
    grid.forEach((row, i) => {
        row.forEach((value, j) => {
            if(value === 0) {
                ++traversable;
            }
            else if(value === 1){
                sx = i, sy = j;
            }
        });
    });
    
    dfs(sx, sy);
    
    return result;    
    
};
