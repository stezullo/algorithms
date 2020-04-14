const maxProfit = (prices) => {
    const n = prices.length;

    if(n !== 0 && n !== 1) {
        let diff = 0;
        let min = prices[0];
        let maxDifference = 0;
        
        for(let i = 1; i < n; i++) {
            diff = prices[i] - min;
            
            if(diff > maxDifference) {
                maxDifference = diff;      
            }
            
            if(prices[i] < min) {
                min = prices[i];
            }
        }
        
        return maxDifference;
    }
    
    return 0;
};
