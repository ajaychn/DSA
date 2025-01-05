// stack

// class Stack {
//     constructor(){
//         this.stack = [];
//     }

//     push(data){
//         this.stack.push(data);
//     }

//     pop(){
//         this.stack.pop();
//     }

//     peak(){
//        return this.stack[this.stack.length - 1]
//     }

//     isEmpty(){
//         return this.stack.length === 0;
//     }

//     size(){
//         return this.stack.length
//     }

//     clear(){
//         this.stack = []
//     }

//     contain(element){
//         return this.stack.includes(element)
//     }

//     reverse(){
//        return this.stack.reverse()
//     }

//     printStack(){
//         for (let i = 0; i < this.stack.length; i++) {
//             console.log(this.stack[i]);
//         }
//     }
// }


// const myStack = new Stack();
// myStack.push(4);
// myStack.push(2);
// myStack.push(6);
// myStack.push(7);
// myStack.pop();
// myStack.printStack();

// console.log(myStack.peak());
// console.log(myStack.contain(4));





// queue

class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(data){
        this.queue.push(data)
    }
    dequeue(){
        if (this.isEmpty()) {
            return "Queue is empty"
        }
        this.queue.shift()
    }
    isEmpty(){
        return this.queue.length === 0;
    }
    peak(){
        if (this.isEmpty()) {
            return "Queue is empty"
        }
        return this.queue[0];
    }
    size(){
        return this.queue.length;
    }
    clear(){
        this.queue = [];
    }
    printQueue(){
       for (let i = 0; i < this.queue.length; i++) {
            console.log(this.queue[i]);
       }
    }
}

const myQueue = new Queue();
myQueue.enqueue(10)
myQueue.enqueue(20)
myQueue.enqueue(30)
myQueue.enqueue(40)
myQueue.dequeue();
myQueue.printQueue();
console.log(myQueue.size());
console.log(myQueue.peak());