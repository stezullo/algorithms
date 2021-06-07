/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [];
    
    s.split('').forEach((character) => {
        if(stack.length != 0 && stack[stack.length - 1] === character) {
            stack.pop();
        }
        else {
            stack.push(character);
        }
    });
    
    return stack.join('');
};
