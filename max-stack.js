/**
 * initialize your data structure here.
 */
var MaxStack = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    return this.stack.pop();
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    let max = this.stack[0];
    
    this.stack.forEach(element => {
        if(max < element) {
            max = element;
        }
    });
    
    return max;
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    
    let max = this.peekMax();
    let lastMaxIndex = this.stack.lastIndexOf(max);
    this.stack = this.stack.filter((el, index) => index !== lastMaxIndex);
    return max;
};

/** 
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */
