
class Node {
    constructor(data,next=null){
        this.data = data,
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }
}

// insert at the begining
LinkedList.prototype.insertAtBegining = function(data){
    const newNode = new Node(data,this.head);
    this.head = newNode;
}

// insert at the end
LinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node(data);
    
    if (!this.head) {
        this.head = newNode;
        return;
    }

    let last = this.head;
    
    while (last.next) {
        last = last.next
    }
    last.next = newNode
}

// insert at given node
LinkedList.prototype.insertAfter = function(prevNode,data){
    if (!prevNode) {
        console.log("The given prev node can not be null");
        return;
    }
    const newNode = new Node(data,prevNode.next);
    prevNode.next = newNode;
}


// Delete the first node
LinkedList.prototype.deleteFirstNode = function(){
    if (!this.head) {
        console.log("The given prev node can not be null");
        return;
    }
    this.head = this.head.next
}

// Delete the last node (second last node)
LinkedList.prototype.deleteLastNode = function(){   
    if (!this.head) {
        console.log("nothing to delete if list is empty");
        return;
    }
    if (!this.head.next) {
        this.head = null
        return //if there is only one node
    }

    let secondLast = this.head
    while (secondLast.next.next) {
        secondLast = secondLast.next
    }
    secondLast.next = null
}

// Delete node by given key
LinkedList.prototype.deleteByKey = function(key){
    if (!this.head) {
        console.log("list is empty");
        return;
    }
    if (this.head.data === key) { // data found at head
        this.head = this.head.next
        console.log('data found at head',this.head);
        return 
    }

    let current = this.head
    while (current.next !== null) {
        if (current.next.data === key) {
            current.next = current.next.next
            return
        }
        current = current.next
    }
    console.log('Key not found in the list');
}

// search operation
LinkedList.prototype.search = function(key){
    let current = this.head
    while (current) {
        if (current.data === key) {
            console.log(current);
            return true
        }
        current = current.next
    }
    return false
}

// traversal
LinkedList.prototype.printList = function(){
    let current  = this.head
    let list = []
    while (current) {
        list.push(current.data)
        current = current.next
    }
    console.log(list);
    return list
}

// reverse linkedlist
LinkedList.prototype.reverseList = function(){
    let current = this.head
    let next = null
    let prev = null

    while(current){
        next = current.next
        current.next = prev
        prev = current
        current = next
        console.log(prev);
    }
    this.head = prev
}


// Example usage
const list = new LinkedList();
list.insertAtBegining(10);
list.insertAtBegining(20);
list.insertAtEnd(40);

// Inserting 25 after the first node (which contains 20)
list.insertAfter(list.head, 25);

// list.deleteFirstNode();
// list.deleteLastNode();
// list.deleteByKey(40)

// console.log(list.search(40));
// console.log(list.printList());
list.reverseList()
console.log(list); 
// console.log(JSON.stringify(list)); 




