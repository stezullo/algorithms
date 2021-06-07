var removeDuplicates = function(s, k) {
    const stack = [];
    for(let i=0; i<s.length; i++){
        if (stack.length===0 || stack[stack.length-1][0]!=s[i]){
            stack.push([s[i], 1]);
        }
        else {
            const l = stack.length-1;
            stack[l][1] = (stack[l][1]+1) % k;
            if (stack[l][1]===0) stack.pop();
        }
    }
    let ans = "";
    stack.forEach(([character, i])=>ans += character.repeat(i));
    return ans;
};
