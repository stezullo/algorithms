function isPalindrome(head: ListNode | null): boolean {
    if(head.next == null) return true;
    let arr = [];
    for(let curr = head; curr != null; curr = curr.next) {
        arr.push(curr.val);
    }
    
    for(let i = 0, j=arr.length-1; i < j; i++, j--) {
        if(arr[i] !== arr[j]) {
            return false;
        }
    }
    return true;
};
