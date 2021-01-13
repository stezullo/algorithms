/*
    Siege of Erastotene - Crivello di Eratosthenes.
*/
var countPrimes = function(n) {
    if(n <= 2) {
        return 0;
    }
    else {
        let prime = Array(n+1).fill(true);
        
        prime[0] = prime[1] = prime[prime.length - 1] = false;
        
       for(let p = 2; p*p <= n; p++) { 
            // If prime[p] is not changed, then it is a prime 
            if(prime[p] == true) { 
                // Update all multiples of p 
                for(let i = p*p; i <= n; i += p) 
                    prime[i] = false; 
            } 
        } 
        
        return prime.filter(element => element).length; 
    }
};
