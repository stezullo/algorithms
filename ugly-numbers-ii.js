var nthUglyNumber = function(n) {
    let arr = [1];
    
    let i2 = 0, i3 = 0, i5 = 0;
    let m2 = 0, m3 = 0, m5 = 0;
    
    let value = 0;
    
    while (arr.length < n){
        
        m2 = arr[i2]*2
        m3 = arr[i3]*3
        m5 = arr[i5]*5
        
        value = Math.min(m2, m3, m5);
        
        if(value === m2){
            ++i2;
        }
        
        if(value === m3){
            ++i3;
        }
        
        if(value === m5){
            ++i5;
        }
        
        arr.push(value);
    }

    return arr[n-1];
};
