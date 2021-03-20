var getKth = (lo, hi, k) => {
    let arr = Array(hi-lo+1).fill(0).map((value) => ({ key: 0, value: 0}));
    for(let i = lo, j = 0; i <= hi; i++, j++) {
        arr[j].value = getKthHelper(i);
        arr[j].key = i;
    }
    
    arr.sort((a,b) => a.value-b.value);
    return arr[k-1].key;
};


const getKthHelper = (nr) => {
    
    let nrSteps = 0;
    while(nr !== 1) {
        nr = (nr % 2 === 0) ? nr/2 : 3*nr+1;
        nrSteps++;
    }
    return nrSteps;
}
