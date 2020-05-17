// O(n) where n is numbers of element of the grid
const orangesRotting = (grid) => {
    const row = grid.length;
    const col = grid[0].length;
    
    const queue = [];       //index of rotten oranges
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    let freshCount = 0;
    for (let i = 0; i< row; ++i) {
        for(let j = 0; j< col; ++j) {
            if (grid[i][j] === 1) {
                ++freshCount;
            } else if (grid[i][j] === 2) {
                queue.push([i, j]);
            }
        }
    }
    
    let minutes = 0;
    
    while(queue.length && freshCount) {
        let len = queue.length;
        
        while(len) {
            // Remove top of queue. Dequeue.
            const rotten = queue.shift();
            
            directions.forEach(direction => {
                let nextI = rotten[0] + direction[0];
                let nextJ = rotten[1] + direction[1];
                
                if (isInBoundaries(nextI, nextJ, row, col)
                    && grid[nextI][nextJ] === 1) {
                    grid[nextI][nextJ] = 2;
                    queue.push([nextI, nextJ]);
                    --freshCount;
                }
            });
            
            --len;
        }
        ++minutes;
    }
    
    return freshCount ? -1 : minutes;
    
};

var isInBoundaries = function(i, j, row, col) {
    return i >= 0 && i < row && j >= 0 && j < col;
}
