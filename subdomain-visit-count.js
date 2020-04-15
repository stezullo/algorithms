/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
const subdomainVisits = (cpdomains) => {
    const n = cpdomains.length;
    
    const ret = {};
    
    let element = "";
    let fullDomain = "";
    let count = 0;
    let spaceIndex = 0;
    
    let indexOfFirstDot = -1;
    let indexOfSecondDot = -1;
    
    let arrSplitted = [];
    
    for(let i=0; i < n; i++) {
        element = cpdomains[i];
        
        arrSplitted = element.split(" ");
        
        // Counter
        count = parseInt(arrSplitted[0]);
        
        // Domain.
        fullDomain = arrSplitted[1];
        
        indexOfFirstDot = fullDomain.indexOf(".");
        indexOfSecondDot = fullDomain.lastIndexOf(".");
        
        addToObject(
            ret,
            fullDomain,
            count
        );
        
        addToObject(
            ret,
            fullDomain.substring(indexOfSecondDot + 1, fullDomain.length),
            count
        );
        
        if(indexOfFirstDot !== indexOfSecondDot) { // One dot
            // Means that we should just to put two value-pair instead of three in our object.
            addToObject(
                ret,
                fullDomain.substring(indexOfFirstDot + 1, fullDomain.length),
                count
            );
        }
    }
    
    return Object.entries(ret).map(entry => (entry[1] + " " + entry[0]));
};

const addToObject = (obj, str, count) => {
    if(obj[str] == null) {
        obj[str] = count;
    }
    else {
        obj[str] += count;
    }
}
