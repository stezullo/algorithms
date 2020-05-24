/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
class Node {
    constructor(val, l, r) {
        this.value = val;
        this.left = l;
        this.right = r;
    }
}

class ABR {
    
    constructor() {
    }
    
    add(T, value) {
        if(!T) {
            T = new Node(value, null, null);
        }
        else {
            if(T.value <= value) {
                T.left = this.add(T.left, value);   
            }
            else {
                T.right = this.add(T.right, value);
            }
        }
            
        return T;
    }
    
    isEmpty(T) {
        return T === null;
    }
    
    preOrderWithAdd(T, L) {
        if(T != null) {
            
            
            L = this.preOrderWithAdd(T.left, L);
            console.log(T.value);
            L = this.addElementToList(L, T.value);
            L = this.preOrderWithAdd(T.right, L);
        }
        return L;
    }
    
    addElementToList(L, el) {
        if(!L) {
            L = new ListNode(el, null);
        }
        else {
            let temp = new ListNode(el, null); 
            temp.next = L;
            L = temp;
        }
        return L;
    }

    
}

var mergeKLists = function(lists) {
    const k = lists.length;
    
    let solution = null;
    
    if(k === 1) {
        solution = lists[0];
    }
    else if(k > 1) {
        // Construct ABR cost k * sum(listsI.length)
        let abr = null;
        let abrC = new ABR();
        let L = null;
        for(let i = 0, top = null; i < k; i++) {
            top = lists[i];
            while(top) {
                abr = abrC.add(abr, top.val);
                top = top.next;
            }
        }
        
        
        solution = abrC.preOrderWithAdd(abr, L);
    }
    
    return solution;
};
