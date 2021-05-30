/**
 * @param {string} n
 * @return {number}
 */
let minPartitions = function(n) {
   for (let i=9; i>=0; i--)  {
       if(n.indexOf(i) >= 0) return i;
   }
};
