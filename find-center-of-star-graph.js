/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let obj = {};
    let max = {
        value: -1,
        vertex: -1,
    };
   edges.forEach(([v1, v2]) => {
        if(obj[v1] === undefined) {
            obj[v1] = 1;
        }
        else {
            ++obj[v1];
        }
       
        if(obj[v2] === undefined) {
            obj[v2] = 1;
        }
        else {
            ++obj[v2];
        }
       
       if(obj[v1] >= obj[v2]) {
           if(obj[v1] >= max.value) {
               max.value = obj[v1];
               max.vertex = v1;
           }
       }
       else {
            if(obj[v2] >= max.value) {
               max.value = obj[v2];
               max.vertex = v2;
           }
       }
    });
    
    return max.vertex;
};
