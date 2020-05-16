class LRUCache {
    class Node {
        public int value;
        public int prev;
        public int next;
        
        public Node(int value, int prev, int next) {
            this.value = value;
            this.prev = prev;
            this.next = next;
        }    
    }
    
    private int maxCap;
    private int cap;
    private int top;
    private int curr;
    private Map<Integer, Node> cache;

    public LRUCache(int capacity) {
        this.maxCap = capacity;
        this.cap = 0;
        this.top = -1;
        this.curr = -1;
        this.cache = new HashMap<Integer, Node>();
    }
    
    public int get(int key) {
        if(this.cache.containsKey(key)) {
            return this.cache.get(key).value;
        }
        else {
            return -1;
        }
    }
    
    public void put(int key, int value) {
        if(this.cache.containsKey(key)) {
            this.cache.get(key).value = value;
        }
        else {
            if(this.cap < this.maxCap) {
                this.cache.put(key, new Node(value, -1, -1));                               
                if(this.cap == 0) {
                    this.top = key;
                }
                else { // We have at least one element 
                       // so we can assign it to the current
                    this.cache.get(key).prev = this.curr;
                    this.cache.get(this.curr).next = key;
                }

                if(this.cap + 1 == this.maxCap) {
                    this.cache.get(key).next = this.top;
                    this.cache.get(this.top).prev = key;
                    this.curr = this.top;
                }
                else {
                    this.curr = key;
                }

                ++this.cap;
            }
            else {
                if(this.maxCap == 1) {
                    this.cache.put(key, new Node(value, key, key));
                } 
                else {
                    Node currElement = this.cache.get(this.curr);
                    
                    this.cache.put(key,
                        new Node(value,
                            currElement.prev,
                            currElement.next)
                    ); 
                    
                    this.cache.get(currElement.prev).next = key;
                    this.cache.get(currElement.next).prev = key;
                    
                    if(this.top == this.curr) {
                        this.top = key;
                    }
                }

                this.cache.remove(this.curr);
                
                if(this.maxCap == 1) {
                    this.top = key;
                    this.curr = key;
                }
                else {
                    this.curr = this.cache.get(key).next;
                }

            }
        }
    }
}
