/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    const n = address.length;
    
    let str = "";
    
    if(n > 0) {    
        for(let i = 0, val = ""; i < n; i++) {
            val = address.charAt(i);
            str += (val === '.') ? "[.]" : val;
        }
    }
    
    return str;
};
