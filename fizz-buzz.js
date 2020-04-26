const fizzBuzz = (n) => {
    let fizzBuzzResponse = [];
    
    for(let i=1, str = ""; i<=n; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            str = "";
            if(i % 3 === 0) {
                str += "Fizz";
            }
            if(i % 5 === 0) {
                str += "Buzz";
            }
            fizzBuzzResponse.push(str);
        }
        else {
            fizzBuzzResponse.push("" + i);
        }
    }
    
    return fizzBuzzResponse;
};
