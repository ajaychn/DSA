
class BSTNode {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(key) {
        const newNode = new BSTNode(key)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(node, newNode) { //node -> root node
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }


    // without recursion

    // insert(key) {
    //     const newNode = new BSTNode(key);

    //     if (this.root === null) {
    //         this.root = newNode;
    //         return;
    //     }

    //     let rootNode = this.root;
    //     let parentNode = null;    

    //     while (rootNode !== null) {
    //         parentNode = rootNode;
    //         if (newNode.key < rootNode.key) {
    //             rootNode = rootNode.left;
    //         } else {
    //             rootNode = rootNode.right;
    //         }
    //     }

    //     if (newNode.key < parentNode.key) {
    //         parentNode.left = newNode;
    //     } else {
    //         parentNode.right = newNode;
    //     }
    // }

    // delete key
    delete(key) {
        this.root = this.deleteNode(this.root, key)
        console.log(this.root);
    }

    deleteNode(rooteNode, key) {
        if (rooteNode === null) {
            console.log("key not found");
            return null
        }

        if (key < rooteNode.key) {
            rooteNode.left = this.deleteNode(rooteNode.left, key)
        } else if (key > rooteNode.key) {
            rooteNode.right = this.deleteNode(rooteNode.right, key)
        } else {
            if (rooteNode.left === null && rooteNode.right === null) {
                return null
            } else if (rooteNode.left === null) {
                return rooteNode.right;
            } else if (rooteNode.right === null) {
                return rooteNode.left;
            } else {
                let tempNode = this.findMinNode(rooteNode.right)
                rooteNode.key = tempNode.key
                rooteNode.right = this.deleteNode(rooteNode.right, tempNode.key)
            }
        }
        return rooteNode
    }

    findMinNode(rightNode) {
        while (rightNode.left !== null) {
            rightNode = rightNode.left
        }
        return rightNode;
    }

    inOrderTraverSal() {
        let result = []
        this.inOrder(this.root, result)
        return result
    }
    inOrder(node, result) {
        if (node !== null) {
            result.push(node.key)
            this.inOrder(node.left, result);
            this.inOrder(node.right, result);
        }
    }

    // depth first search (Travarsal)
    dft(){
        let newRoot = this.root
        if (newRoot === null) {
            console.log("empty tree");
            return;
        }
        const values = [] //[ 15,9,4,12,19,18,30]
        const  stack = [newRoot] // []
        while (stack.length > 0) {
            const node = stack.pop()
            values.push(node.key)
            
            if (node.right !== null) {
                stack.push(node.right)
            }
            if (node.left !== null) {
                stack.push(node.left)
            }
        }

        return values
    }
    // dft recursive is preOrderTraversal

    // Breadth first search (Travarsal)
    bft(){
        let newRoot = this.root
        if (newRoot === null) {
            console.log("empty tree");
            return;
        }
        const values = [] // [15,9,19,4,12,18,30]
        const queue = [newRoot] // []
        while (queue.length > 0) {
            const node = queue.shift();
            values.push(node.key)
            
            if (node.left !== null) {
                queue.push(node.left)
            }
            if (node.right !== null) {
                queue.push(node.right)
            }
        }
        return values
    }
}

const tree = new BinarySearchTree();
tree.insert(15)
tree.insert(9)
tree.insert(19)
tree.insert(30)
tree.insert(18)
tree.insert(4)
tree.insert(12)
// tree.delete(19)   
// console.log(tree.inOrderTraverSal());
console.log(tree.dft());
console.log(tree.bft());


console.log(tree);