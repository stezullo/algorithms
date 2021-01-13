var canPlaceFlowers = function(flowerbed, n) {
    const { length } = flowerbed;
    
    let count = 0;
    
    for(let i = 0; i < length; i++) {
            if(flowerbed[i] === 0) {
                    // Can place if adjacents are not 1 or not exists.
                if((i-1 < 0 || flowerbed[i-1] === 0) && (i+1 > length -1 || flowerbed[i+1] === 0)) {
                    flowerbed[i] = 1;
                    ++count;
                }
            } 
    }  
    return (count >= n);
};
