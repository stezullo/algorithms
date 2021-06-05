/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    let answers = Array(n).fill(0);
    for(let i=0, stack = []; i < n; i++) {
        while(stack.length > 0 && temperatures[stack[stack.length-1]] < temperatures[i]) {
            let temperatureIndex = stack.pop();
            answers[temperatureIndex] = i-temperatureIndex;
        }
        stack.push(i);
    }
    return answers;
};
