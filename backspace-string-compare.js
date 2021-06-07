/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return helper(s) === helper(t);
};

const helper = (s) => {
    const stack = [];
    
    s.split('').forEach((character) => {
        if(character === '#' && stack.length != 0) {
            stack.pop();
        }
        else if(character !== '#') {
            stack.push(character);
        }
    });
    
    return stack.join('');
}
