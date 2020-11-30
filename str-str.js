var strStr = function(haystack, needle) {
    if(!needle || needle === "") {
        return 0;
    }
    else {
        return haystack.indexOf(needle);        
    }
};
