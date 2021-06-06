/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
   boxTypes.sort((a, b) => b[1] - a[1]);
    const n = boxTypes.length;
    let sum = 0;
    for(let i=0; truckSize != 0 && i < n; i++) {
        let [numberOfBoxes, numberOfUnitsPerBox]  = boxTypes[i];
        if(numberOfBoxes > truckSize) {
            numberOfBoxes = truckSize;
        }
        truckSize -= numberOfBoxes;
        sum += (numberOfBoxes * numberOfUnitsPerBox);
    }
    return sum;
};
