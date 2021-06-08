/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let res = "";
    
    while(num != 0) {
        if(num >= 1000) {
            num -= 1000;
            res += "M";
        }
        else if(num >= 900 && num <= 999) {
            num -= 900;
            res += 'CM';
        }
        else if(num >= 500 && num <= 899) {
            num -= 500;
            res += 'D';
        }
        else if(num >= 400 && num <= 499)  {
            num -= 400;
            res += 'CD';
        }
        else if(num >= 100 && num <= 399) {
            num -= 100;
            res += 'C';
        }
        else if(num >= 90 && num <= 99) {
            num -= 90;
            res += 'XC';
        }
        else if(num >= 50 && num <= 89) {
            num -= 50;
            res += 'L';
        }
        else if(num >= 40 && num <= 49) {
            num -= 40;
            res += 'XL';
        }
        else if(num >= 10 && num <= 39) {
            num -= 10;
            res += 'X';
        }
        else if(num === 9) {
            num -= 9;
            res += 'IX';
        }
        else if(num >= 5 && num <= 8) {
            num -= 5;
            res += 'V';
        }
        else if(num === 4) {
            num -= 4;
            res += 'IV';
        }
        else if(num >= 1 && num <= 3) {
            num -= 1;
            res += 'I';
        }
    }
    return res;
};
