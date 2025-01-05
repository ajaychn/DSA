

// class BSTNode {
//     constructor(key) {
//         this.key = key
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null
//     }

//     insert(data) {
//         const newNode = new BSTNode(data);
//         if (this.root === null) {
//             this.root = newNode
//         } else {
//             this.insertNode(this.root, newNode)
//         }
//     }

//     insertNode(newRoot, newNode) {
//         if (newNode.key < newRoot.key) {
//             if (newRoot.left === null) {
//                 newRoot.left = newNode
//             } else {
//                 this.insertNode(newRoot.left, newNode)
//             }
//         } else {
//             if (newRoot.right === null) {
//                 newRoot.right = newNode
//             } else {
//                 this.insertNode(newRoot.right, newNode)
//             }
//         }
//     }

//     delete(key) {
//         const newroot = this.deleteNode(this.root, key)
//         console.log(newroot);
//     }
//     deleteNode(rootNode, key) {
//         if (rootNode === null) {
//             return null //key not found
//         }

//         if (key < rootNode.key) {
//             rootNode.left = this.deleteNode(rootNode.left, key)
//         } else if (key > rootNode.key) {
//             rootNode.right = this.deleteNode(rootNode.right, key)
//         }
//         else {
//             if (rootNode.left === null && rootNode.right === null) {
//                 return null
//             } else if (rootNode.left === null) {
//                 return rootNode.right
//             } else if (rootNode.right === null) {
//                 return rootNode.left
//             } else {
//                 const temp = this.findMinNode(rootNode.right)
//                 rootNode.key = temp.key
//                 rootNode.right = this.deleteNode(rootNode.right,temp.key)
//                 return rootNode
//             }
//         }
//         return rootNode
//     }

//     findMinNode(node){
//         while (node.left !== null) {
//              node = node.left
//         }
//         return node
//     }
// }


// const tree = new BinarySearchTree()
// tree.insert(20);
// tree.insert(10);
// tree.insert(5);
// tree.insert(4);
// tree.insert(8);
// tree.insert(30);
// tree.insert(25);
// tree.delete(20)
// // tree.insert(5);
// // tree.insert(2);
// console.log(tree);



// class Node {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }
// class LinkedList {
//     constructor() {
//         this.head = null
//     }

//     addNode(data){
//         const newNode = new Node(data)
//         if (this.head === null) {
//             this.head = newNode
//             return;
//         }
//         let curntNode = this.head
//         while (curntNode.next) {
//             curntNode = curntNode.next;
//         }
//         curntNode.next = newNode; 
//     }

//     insertAtStart(data){
//         const newNode = new Node(data)
//         if (!this.head) {
//             this.head = newNode
//             return;
//         }
//         newNode.next = this.head;
//         this.head = newNode

//     }

//     insertAtLast(data){
//         const newNode = new Node(data)
//         if (!this.head) {
//             this.head = newNode
//             return;
//         }
//         let currNode = this.head
//         while (currNode.next) {
//             currNode = currNode.next
//         }
//         currNode.next = newNode
//     }

//     deleteFirstNode(){
//         if (!this.head) {
//             console.log("the list is empty");
//             return;
//         }

//         this.head = this.head.next
//     }
//     deleteLastNode(){
//         if (!this.head) {
//             console.log("the list is empty");
//             return;
//         }
//         if (!this.head.next) {
//             this.head = null
//             return //if there is only one node
//         }

//         let currNode = this.head
//         while (currNode.next.next) {
//             currNode = currNode.next
//         }
//         currNode.next = null
//     }

//     deleteByKey(data){
//         if (!this.head) {
//             console.log("the list is empty");
//             return;
//         }
//         if (this.head.data === data) {
//             this.head = this.head.next //data found at head
//             return;
//         }
//         let currNode = this.head
//         while (currNode.next) {
//             if (currNode.next.data === data) {
//                 currNode.next = currNode.next.next
//                 return;
//             }
//             currNode = currNode.next
//         }
//     }

// }
// const list = new LinkedList();
// list.addNode(4)
// list.addNode(5)
// list.addNode(6)
// list.addNode(7)
// list.addNode(8)
// list.insertAtLast(12)
// list.insertAtStart(1)
// // list.deleteFirstNode()
// // list.deleteLastNode()
// list.deleteByKey(12)
// console.log(list);

// const numbers = [45, 4, 9, 16, 25];
// let keys = numbers.entries()
// console.log(keys);





// const express = require('express');
// const app = express()
// const route = express.Router()

// const midle = (req, res, next) => {
//     console.log("checking middleware");
//     const token = 'xyz';

//     if (token !== 'xyz') {
//         res.send('Invalid token')
//     } else {
//         next()
//     }
// }

// const getUser = (req, res) => {
//     res.send("Welcome Home")
// }

// route.route('/').get(getUser)


// app.use('/api/user', midle,route)


// app.listen(4000, () => {
//     console.log('the server is running on the 4000');
// })






// sliding window techniqe

// function longestSubstring(s) {
//     let left = 0
//     let right = 0
//     let maxSubstr = 0
//     let set = new Set()
//     let longestSubstr = '';

//     while (right < s.length) {
//         const currentChar = s[right]

//         if (!set.has(currentChar)) {
//             set.add(currentChar)
//             right++
//             // maxSubstr = Math.max(maxSubstr, right - left)
//             if (right - left > maxSubstr) {
//                 maxSubstr = right - left;
//                 longestSubstr = s.substring(left, right);
//             }
//         } else {
//             set.delete(s[left])
//             left++
//         }
//     }
//     return { length: maxSubstr, substring: longestSubstr };
// }

// let inputString = 'abcdabcbb'
// console.log(longestSubstring(inputString))