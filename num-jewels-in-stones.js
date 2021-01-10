var numJewelsInStones = function(jewels, stones) {
    let result = 0;
    jewels.split('').forEach(jewel => {
       result += stones.split('').filter((stone) => (stone === jewel)).length;
    });
    return result;
};
