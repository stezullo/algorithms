var findSmallestSetOfVertices = function(n, edges) {
    let obj = {};
    edges.forEach(([v1, v2]) => {
        if(obj[v1] === undefined) {
            obj[v1] = true;
        }
        if(obj[v2] === undefined || obj[v2] === true) {
            obj[v2] = false;
        }
    });
    
    
    let arr = [];
    Object.entries(obj).forEach(([key, value]) => {
        if(value) {
            arr.push(key);
        }
    })
    return arr;
};
