/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let arr = [];
    
    points.forEach((point, i) => {
        const x1 = point[0], y1 = point[1];
        const distance = Math.sqrt(x1*x1 + y1*y1);
        arr.push({point, distance});
    });
    
    arr.sort((a, b) => a.distance - b.distance);
    console.log(arr);
    console.log(arr.map((elem) => elem.point))
    return arr.map((elem) => elem.point).slice(0, k);
};
