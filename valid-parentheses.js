class Stack {
    constructor() {
        this._stack = [];    
    }
    
    isEmpty() {
        return this._stack.length === 0;
    }
    
    push(element) {
        this._stack.push(element);
    }
    
    pop() {
        return this._stack.pop();
    }
}

const isValid = (s) => {
    const n = s.length;
    
    if(n === 0) {
        return true;
    }
    
    let stack = new Stack();
    
    for(let i = 0, bracket = "", element = "", openParenthesis = ""; i < n; i++) {
        bracket = s.charAt(i);
        
        if(isClosingBracket(bracket)) {
            
            if(isRoundClosingBracket(bracket)) { // is )
                openParenthesis = "(";
            }
            else if(isSquareClosingBracket(bracket)) { // is ]
                openParenthesis = "[";
            }
            else { // is }
                openParenthesis = "{";
            }
            
            if(!stack.isEmpty()){
                element = stack.pop();
            }
            else {
                return false;
            }
            
            if(element !== openParenthesis) {
                return false;
            }
            // Otherwise we can continue.
        }
        else {
            // if opening just push that element.
            stack.push(bracket);
        }
    }
    
    return stack.isEmpty();
};

const isClosingBracket = (bracket) => {
    return bracket === ')' || bracket === ']' || bracket === '}';
}

const isRoundClosingBracket = (bracket) => {
    return bracket === ')';
}

const isSquareClosingBracket = (bracket) => {
    return bracket === ']';
}

const isCurlyClosingBracket = (bracket) => {
    return bracket === '}';
}
