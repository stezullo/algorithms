var maximumWealth = function(accounts) {
    let max = Number.MIN_VALUE;
    console.log(max);
    accounts.forEach((account) => {
        const value = account.reduce((acc, value) => (acc+value));
        if(value > max) {
            max = value;
        }
    });
    
    return max;
};
