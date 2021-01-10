/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    
    if(obstacleGrid[0][0] === 1 || obstacleGrid[m-1][n-1] === 1) {
        return 0;
    }
    else if(m === 1 && n === 1) {
        return 1;
    }
    else {
        return uniquePathsWithObstacleMemoized(
            obstacleGrid,
            m - 1,
            n - 1,
            { '(0,0)': 1 });
    }
};

var uniquePathsWithObstacleMemoized = function(obstacleGrid, i, j, memo) {
    const key = `(${i},${j})`;
    
    if(memo[key] == null) {
        memo[key] = 0;
        
        if(i > 0 && obstacleGrid[i-1][j] !== 1) {
            memo[key] += uniquePathsWithObstacleMemoized(obstacleGrid, i-1, j, memo);
        }
        
        if(j > 0 && obstacleGrid[i][j-1] !== 1) {
            memo[key] += uniquePathsWithObstacleMemoized(obstacleGrid, i, j-1, memo);
        }
    }
    
    return memo[key];    
}
