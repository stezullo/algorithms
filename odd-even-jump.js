/*
 * @param {number[]} arr
 * @return {number}
 */

const oddEvenJumps = (arr) => {
	const n = arr.length;
    
    if(n <= 1) {
        return n;
    }
    else {
        let goodIndexes = 1;
        
        
        const smallest = Array(n).fill(false);
        const largest = Array(n).fill(false);

        smallest[n - 1] = largest[n - 1] = true;

        const jumpTree = new Node(arr[n - 1], n - 1);

        for (let i = n - 2; i >=0; i--){
            const currentValue = arr[i];
            const nextGreaterIdx = nextGreater(jumpTree, currentValue);
            if (nextGreaterIdx !== null){
                const evenValue = largest[nextGreaterIdx];
                smallest[i] = evenValue;
                if (evenValue){
                    goodIndexes++;
                }
            }
            const nextLeastIdx = nextLeast(jumpTree, currentValue);
            if (nextLeastIdx !== null){
                largest[i] = smallest[nextLeastIdx];
            }
            addNode(jumpTree, new Node(currentValue, i));
        }

        return goodIndexes;
    }
}


class Node{
	constructor(value, idx){
		this.value = value;
		this.idx = idx;
		this.left = null;
		this.right = null;
	}
}


const addNode = (rootNode, newNode) => {
    let currNode = rootNode;
    while (1){
        if (currNode.value === newNode.value){
            currNode.idx = newNode.idx;
            break;
        } else if (currNode.value > newNode.value){
            if (currNode.left !== null){
                currNode = currNode.left;
                continue;
            } else {
                currNode.left = newNode;
                break;
            }
        } else {
            if (currNode.right !== null){
                currNode = currNode.right;
                continue;
            } else {
                currNode.right = newNode;
                break;
            }
        }
    }
}

const nextGreater = (rootNode, newValue) => {
    let currNode = rootNode;
    let candidate = null;
    while (currNode !== null){
        if (currNode.value >= newValue){
            candidate = currNode;
            currNode = currNode.left;
        } else {
            currNode = currNode.right;
        }
    }
    
    return candidate != null ? candidate.idx : null;
}

const nextLeast = (rootNode, newValue) => {
    let currNode = rootNode;
    let candidate = null;
    while (currNode !== null){
        if (currNode.value <= newValue){
            candidate = currNode;
            currNode = currNode.right;
        } else {
            currNode = currNode.left;
        }
    }
    
    return candidate != null ? candidate.idx : null;
}
