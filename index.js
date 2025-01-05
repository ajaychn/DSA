// 100 days challenges


// write a function that take a string as a input and return the longest word in the string


// const findLongestWord = (str)=>{
//     if(str.trim().length === 0){
//         return false;
//     }
//     let strArr = str.split(" ");
//     // strArr = strArr.sort((a,b)=> a.length - b.length)
//     // return strArr.at(-1)

//     return strArr.reduce((accum,curItm)=>{
//         return curItm.length > accum.length ? curItm : accum
//     },"") 
// }


// console.log(findLongestWord("hello my name is ajay chauhan"));




// hashtag generator

// const generateHash = (str) => {

//     if (str.trim().length === 0) {
//         return false;
//     }
//     let strArr = str.split(" ");

//     strArr = strArr.map((item)=>{
//         return item.replace(item[0],item[0].toUpperCase())
//     })
//     return strArr = `#${strArr.join("")}`
// }

// console.log(generateHash("my name is ajay chauhan"));




// count occurrences of Character
// const countChar = (str,char)=>{
//     str = str.toLowerCase()
//     char = char.toLowerCase()

//     str = str.split('')
//     return str.reduce((accum,ele)=>{
//         if (ele === char) {
//             accum++
//         }
//         return accum
//     },0)
// }

// console.log(countChar("missIssippi","i"));



// const checkTriangleType = (a,b,c)=>{
//     if (a === b && b === c) return "equilateral";
//     if (a === b || b === c || a === c) return "isosceles";
//     return "scalene";
// }

// console.log(checkTriangleType(3,3,3));
// console.log(checkTriangleType(3,4,3));
// console.log(checkTriangleType(5,8,6));




// sort an array

// const sortAscending = (arr)=>{
//     return arr.sort((a,b)=> a - b)
// }
// console.log(sortAscending([5,3,10,8]));





// palindrome

// const isPalindrome = (word) =>{
//     word = word.toLowerCase()
//     let newWord = word.split("").reverse().join('');
//     return word === newWord ? true : false
// }

// console.log(isPalindrome("racecar"));




// find max value
// const findMax = (arr)=>{
//     return Math.max(...arr)
// }

// console.log(findMax([1,5,3,9,2]));
// console.log(findMax([-10,-5,-3,-9,-2]));
// console.log(findMax([5]));




// factorial number

// const factorial = (num)=>{
//     let temp = 1
//     for (let i = 1; i <= num; i++) {
//         temp = temp * i
//     }
//     return temp;
// }

// console.log(factorial(4));




// calculate the average

// const calculateAverage = (arr)=>{
//     let temp = 0
//     arr.forEach(ele => {
//         temp = temp + ele;
//     });
//     return temp / arr.length;
// }

// console.log(calculateAverage([5,10,2,8]));





// Equal Array

// const arrayAreEqual = (a,b)=>{
//     return a.every((elem,i)=>{
//         return elem === b[i]
//     }) 
//     console.log(newArr);
// }

// console.log(arrayAreEqual([1,2,3],[1,2,3]));
// console.log(arrayAreEqual([1,2,3],[1,2,4]));
// console.log(arrayAreEqual([1,5,3],[1,2,3]));




// sum of digits

// const sumOfDigit = (num)=>{
//     let temp = 0
//     Array.from(String(num)).forEach((ele)=>{
//         temp = temp + +ele;
//     })
//     console.log(temp);
// }

// console.log(sumOfDigit(12345));





// remove duplicate value

// const removeDuplicate = (arr)=>{
//     const a = [...new Set(arr)]
//     console.log(a);
// }

// console.log(removeDuplicate([1,2,3,2,1,4]));
// console.log(removeDuplicate([5,6,7,7,8,9]));
// console.log(removeDuplicate([1,2,3,4]));
// console.log(removeDuplicate([]));





// count vowels

// const countVowels = (str)=>{
//     let arr = ['a','e','i','o','u']
//     str = str.split("")
//     let count = 0
//     for (const char of str) {
//         if (arr.includes(char.toLowerCase())) {
//             count++
//         }
//     }
//     return count;
// }

// console.log(countVowels("Hello world"));
// console.log(countVowels("the quick brown fox"));
// console.log(countVowels("brrp"));





// isPowerOfTwo

// const isPowerOfTwo = (num)=>{
//     let op = false;

//     for (let i = 1; i < num; i++) {
//         if (2**i === num) {
//             op = true;
//         }    
//     }

//     console.log(op);
// }

// console.log(isPowerOfTwo(2));






// sum of squares

// const sumOfsquares = (arr)=>{
//     // return arr.reduce((acum,ele)=>{
//     //     return acum = acum + ele * ele
//     // },0)

//     let temp = 0;

//     for (let i = 0; i < arr.length; i++) {
//         temp = temp + arr[i] * arr[i];
//     }
//     return temp;
// }

// console.log(sumOfsquares([1,2,3]));




// find minimum value in a array

// const findMin = (arr)=>{
//     return Math.min(...arr)
// }

// console.log(findMin([1,5,3,9,2])); 
// console.log(findMin([-10,-5,-3,-9,-2]));
// console.log(findMin([5]));




// convert a string to camelCase & snake_case

// const toCamelCase = (string)=>{
//     string = string.split(" ");
//     string = string.map((ele,i) => {
//         if (i === 0) {
//             return ele.toLowerCase()
//         }
//         const item = ele.toLowerCase()
//         return item.replace(item[0],item[0].toUpperCase())
//     });

//     string = string.join('')
//     return string;
// }

// console.log(toCamelCase("hello world aJAy CHAUHAN"));




// check character uppercase or lowercase

// const isUpperCase = (word)=>{
//     let str = word.toUpperCase()
//     return word === str ? true : false
// }

// console.log(isUpperCase("HELlO"));




// write a function to check if a given string starts with a specific substring
// const startWith = (word,subStr)=>{
//     subStr = subStr.toLowerCase()
//     word = word.split(' ')[0].toLowerCase();
//     return word === subStr ? true : false;
// }

// console.log(startWith("Hello world","hello"));
// console.log(startWith("hello world","world"));





// reverse a string without any built-in methods
// const reverseString = (string)=>{
//     string = string.split('');
//     let temp = ''
//     for (let i = string.length - 1; i >= 0; i--) {
//         temp += string[i]
//     }
//     return temp;
// }
// console.log(reverseString("ajay chauhan"));





// write a function that takes an array of numbers as input and returns the mean(averagge) of those numbers.

// function calculateMean(arr) {
//     if (arr.length === 0) {
//         return 0;
//     }
//     let temp = 0
//     arr.forEach(ele => {
//         temp = temp + ele
//     });
//     temp = temp / arr.length;
//     return temp;
// }


// console.log(calculateMean([1,2,3,4,5]));
// console.log(calculateMean([10,20,30]));
// console.log(calculateMean([-1,0,1]));
// console.log(calculateMean([]));





// write a js function findMedian(arr) that takes an array of numbers as input and returns the median value. 
// if the array has an even number of element, return the average of the two middle values.
// firs sort the array

// const findMedian = (arr)=>{
//     arr = arr.sort((a,b)=> a - b)
//     const mid = Math.floor(arr.length / 2);
//     if (arr.length % 2 === 0) {
//        return (arr[mid-1] + arr[mid]) / 2;
//     }else{
//         return arr[mid];
//     }

// }
// console.log(findMedian([5,3,9,1,7]));
// console.log(findMedian([2,4,6,8]));
// console.log(findMedian([1,3,5,7,9,11]));
// console.log(findMedian([1,3,5,7,9,11,12]));






// output {'1':2,'2':3,'3':1,'4':1}
// const numbers = [1,2,2,3,1,4,2];

// let obj = {}
// let count = 0
// for (const arr of numbers) {
//    obj[arr] = (obj[arr] || 0) + 1
// }
// console.log(obj);




// find the mode in an array



// console.log(findMode([1,2,2,3,1,4,2]));





// factorial number using recursion

// function factorial(num) {
//     if (num === 1) {
//         return 1    
//     }else{
//         console.log(num);
//         return num * factorial(--num)
//     }
// }

// console.log(factorial(5));





// write a function to find the nth fibonacci number using recursion

// the fibonacci series is a sequence of numbers in which each number (fibonacci number) is the sum of the two 
// preceding ones. It starts with 0 and 1 and the subsequent number are calculated by adding the last two numbers. so,
// the fibonacci series looks like this: 0,1,1,2,3,5,8,13,21


// function fibonacci(n) {
//     if(n <= 1){
//         return n
//     }else{
//         return fibonacci(n-1) + fibonacci(n-2)
//     }
// }

// console.log(fibonacci(7));



// remove duplicates value from the string 1

// function func(str) {
//     let unique = '';
//     str = str.split('')
//     str.forEach(ele => {
//         if (!unique.includes(ele)) {
//             unique = unique + ele
//         }
//     });
//     return unique
// }

// console.log(func("chauhan"));





// remove duplicates value from the string 2

// function func(str) {
//     let unique = '';
//     str = str.split('')
//     for (let i = 0; i < str.length; i++) {
//         if (!unique.includes(str[i])) {
//             unique = unique + str[i]
//         }
//     }
//     return unique;
// }

// console.log(func("ajay"));



// remove duplicates value from the string 3

// function func(str) {
//     str = str.split('')
//     str = str.filter((item,i)=>{
//         console.log(str.indexOf(item) === i);
//         return str.indexOf(item) === i;
//     });
//     console.log(str.toString().replaceAll(',',''));
// }

// console.log(func("ajay"));





// remove duplicates value from the string 4

// function func(str) {
//     str = str.split('')
//     let unique = str.reduce(function (acc, curr) {
//         if (!acc.includes(curr)){
//             acc = acc + curr
//         }
//         return acc;
//     }, '');
//     return unique;
// }

// console.log(func("ajay"));





// function maxNum(arr) {
//     let temp = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > temp) {
//             temp = arr[i]
//         }
//     }
//    console.log(temp);

// }

// console.log(maxNum([2, 4, 6, 1, 3, 15, 17]));





// repeat the string 
// function repeatString(string,num) {
//     let temp = ''
//     for (let i = 0; i < num; i++) {
//         temp += string        
//     }
//     console.log(temp);
// }

// console.log(repeatString('abc',5));



// function repeatString(string, num) {
//     return string.repeat(num)
// }

// console.log(repeatString('abc', 5));



// two sum
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j];
//             }
//         }
//     }
// };

// console.log(twoSum([4,5,2,3],8));




// const user = {
//     name: "John",
//     printInfo: function () {
//         console.log(`My name is ${this.name}.`);
//     },
// };

// const admin = Object.create(user);

// admin.name = "Nick";

// admin.printInfo(); 
// console.log(user);



// for (i = 1; i <= 10; i++) {
//     console.log(`2X${i}=${2*i}`);
// }


// let sum = 0;
// let i = 1;

// while (i <= 10) {
//   sum += i;
//   i++;
//   console.log(sum);
// }

// console.log("The sum of the numbers from 1 to 10 is: " + sum);

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i<10);

// let num = 6;
// let temp = 1;
// let i = 0;
// do{
//     temp = temp * num;
//     num--;
// }while (i < num);

// console.log(temp);


// for (let i = 1; i <= 5; i++) {
//     let stars = '';
//     for (let j = 0; j < i; j++) {
//       stars += '*';
//     }

//     console.log(stars);
//   }



// for(i=1;i<=10;i++){
//   console.log(i);
//   if (i == 7) {
//     break
//   }
// }


// function evebOrOdd(num) {
//   if (num%2 == 0) {
//     console.log('even');
//     return  false;
//   }
//   console.log('odd');

// }
// evebOrOdd(7)


// function squareOf(num) {
//   console.log(num*num);
// }
// squareOf(4)


// function highOrder(cb1,cb2,arr) {
//     for (let i = 0; i < arr.length; i++) {
//         const ele = arr[i];
//         console.log(ele);
//     }
//     console.log('hello i am highorder function');
//     return cb2;
// }

// function callback1() {
//     console.log("callback 1");

// }
// function callback2(num) {
//     console.log("callback 2");
//     num();
//     return 'Ajay'
// }

// const arr = [1,2,3,4,5,6,7];
// const res = highOrder(callback1,callback2,arr);
// const str = res(res);
// console.log(str);



// function data() {
//     const a =10;
//     const b = "hello";
//     const c = 20;;
//     return {a,b,c}
// }



// function restOperator(fn) {
//     const {a,c} = fn();
//     console.log(a,c);
// }

// restOperator(data) 


// function delayedMessage() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("This is a delayed message");
//         }, 2000);
//     });
// }

// delayedMessage().then((message) => {
//     console.log(message);
// });


// function fetchData(url) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Data from ${url}`);
//         }, 1000);
//     });
// }

// fetchData('server1.com')
//     .then((data) => {
//         console.log(data);
//         return fetchData('server2.com');
//     })
//     .then((data) => {
//         console.log(data);
//         return fetchData('server3.com');
//     })
//     .then((data) => {
//         console.log(data);
//         return fetchData('server4.com');
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error('Error fetching data:', error);
//     });


// async function logResolvedValue(promise) {
//     try {
//         const value = await promise;
//         console.log(value);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// // Example usage:
// const examplePromise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Resolved value');
//     }, 2000);
// });

// logResolvedValue(examplePromise);



// URL of a public API (JSONPlaceholder is a common example)
// const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// fetch(apiUrl)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         return response.json(); 
//     })
//     .then((data) => {
//         console.log('Response data:', data); 
//     })
//     .catch((error) => {
//         console.error('Fetch error:', error);
//     });




// function createPromise(value, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value);
//         }, delay);
//     });
// }

// const promise1 = createPromise('First promise', 1000);
// const promise2 = createPromise('Second promise', 2000);
// const promise3 = createPromise('Third promise', 3000);

// Promise.all([promise1, promise2, promise3])
//     .then((values) => {
//         console.log('All promises resolved with values:', values);
//     })
//     .catch((error) => {
//         console.error('One of the promises rejected:', error);
//     });




// function createPromise(value, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value);
//         }, delay);
//     });
// }

// const promise1 = createPromise('First promise', 3000);
// const promise2 = createPromise('Second promise', 1000);
// const promise3 = createPromise('Third promise', 2000);

// Promise.race([promise1, promise2, promise3])
//     .then((value) => {
//         console.log('First resolved promise value:', value);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });


// function throwError() {
//     throw new Error('This is an intentional error');
// }

// function handleError() {
//     try {
//         throwError();
//     } catch (error) {
//         console.error('An error occurred:', error.message);
//     }
// }

// handleError();




// function divideNumbers(numerator, denominator) {
//     if (denominator === 0) {
//         throw new Error('Denominator cannot be zero');
//     }
//     return numerator / denominator;
// }

// function handleDivision(numerator, denominator) {
//     try {
//         const result = divideNumbers(numerator, denominator);
//         console.log(`Result: ${result}`);
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// }

// handleDivision(10, 2);
// handleDivision(10, 0);


// function exampleFunction() {
//     try {
//         console.log('Entering try block');
//         throw new Error('An intentional error occurred');
//         console.log('This will not be logged');
//     } catch (error) {
//         console.log('Entering catch block');
//         console.error('Caught an error:', error.message);
//     } finally {
//         console.log('Entering finally block');
//     }
//     console.log('Code execution continues after try-catch-finally');
// }

// exampleFunction();




// Custom error class
// class CustomError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'CustomError'; 
//     }
// }

// function throwErrorFunction() {
//     throw new CustomError('This is a custom error message');
// }

// function handleCustomError() {
//     try {
//         throwErrorFunction();
//     } catch (error) {
//         if (error instanceof CustomError) {
//             console.error('Caught a custom error:', error.message);
//         } else {
//             console.error('Caught an unexpected error:', error);
//         }
//     }
// }

// handleCustomError();



// Custom error class
// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'ValidationError';
//     }
// }

// function validateInput(input) {
//     if (input.trim() === '') {
//         throw new ValidationError('Input cannot be empty');
//     }
//     return 'Input is valid';
// }

// function handleInput(input) {
//     try {
//         const result = validateInput(input);
//         console.log(result);
//     } catch (error) {
//         if (error instanceof ValidationError) {
//             console.error('Validation error:', error.message);
//         } else {
//             console.error('An unexpected error occurred:', error);
//         }
//     }
// }

// handleInput('');
// handleInput('Valid input'); 



// class Person {
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }

//     greeting(){
//         return `hello i am ${this.name} and my age is ${this.age}`
//     }
// }

// const personInstance = new Person('Ajay',23)
// console.log(personInstance.greeting());



// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0
//     }

//     addNodeAtHead(data) {
//         const newNode = new Node(data)
//         newNode.next = this.head;
//         this.head = newNode
//         this.size++;
//     }
//     printNode() {
//         let head = this.head
//         let result = []
//         while (head) {
//             result.push(head.data)
//             head = head.next
//         }
//         console.log(result);
//     }
//     insertAt(index, data) {
//         if (index < 0 || index > this.size) {
//             console.log("invalid index");
//             return;
//         }
//         if (index === 0) {
//             this.addNodeAtHead(data);
//             return;
//         }

//         let newNode = new Node(data);
//         let temp = this.head;
//         for (let i = 0; i < index - 1; i++) {
//             temp = temp.next
//         }
//         newNode.next = temp.next
//         temp.next = newNode
//         this.size++
//     }
//     removeAtHead() {
//         if (!this.head) {
//             console.log("no head found");
//             return;
//         }
//         this.head = this.head.next
//         this.size--
//     }
//     removeElement(data) {
//         if (this.head.data === data) {
//             this.head = this.head.next
//             console.log('data found at head', this.head);
//             return;
//         }

//         let curr = this.head
//         while (curr.next) {
//             if (curr.next.data === data) {
//                 curr.next = curr.next.next
//                 return;
//             }
//             curr = curr.next
//         }
//     }
//     searchElement(data) {
//         let temp = this.head
//         while (temp) {
//             if (temp.data === data) {
//                 console.log(temp);
//                 return true
//             }
//             temp = temp.next
//         }
//         return false
//     }

//     findMiddle() {
//         let temp = this.head
//         let midIndex = Math.floor(this.size / 2)

//         for (let i = 0; i < midIndex; i++) {
//             temp = temp.next
//         }
//         console.log(temp.data);
//     }

//     addNodeAtLast(data) {
//         const newNode = new Node(data)
//         let last = this.head

//         while (last) {
//             if (last.next === null) {
//                 last.next = newNode
//                 return;
//             }
//             last = last.next
//         }

//         // or

//         // while (last.next) {
//         //     last = last.next
//         // }
//         // last.next = newNode
//     }

//     deleteLastNode() {
//         let last = this.head
//         while (last.next.next) {
//             last = last.next
//         }
//         last.next = null
//     }

//     deleteByIndex(index) {
//         let curr = this.head;

//         if (index === 0) {
//             this.head = this.head.next
//             console.log('data found at head', this.head);
//             return;
//         }

//         for (let i = 0; i < index - 1; i++) {
//             curr = curr.next
//         }
//         curr.next = curr.next.next
//     }

//     reverseList(){
//         let curr = this.head
//         let next = null
//         let prev = null

//         while (curr) {
//             next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head = prev
//     }

// }

// const list = new LinkedList();
// list.addNodeAtHead(2)
// list.addNodeAtHead(3)
// list.addNodeAtHead(4)
// list.addNodeAtHead(8)

// // list.printNode()
// // list.removeAtHead()
// list.insertAt(3, 50)
// // list.removeElement(40)
// // console.log(list.searchElement(60));
// // list.findMiddle()
// // list.addNodeAtLast(100)
// // list.deleteLastNode()
// // list.deleteByIndex(2)
// list.reverseList()
// console.log(list);


const string = "ajaychauhan";

const obj = {
    name: "ajay",
    age: 23
}

// for (const key in string) {
//     console.log(string[key]);
// }
// function reverseStr(str) {
//     if (str == "") {
//         return ""
//     }
//     const result = reverseStr(str.substr(1)) + str.charAt(0)
//     return result
// }
// console.log(reverseStr("ajay"));


// function reverseString(str) {
//     str = str.split("")
//     str = str.reduceRight((accum,ele)=>{
//         return accum + ele
//     })
//     return str
// }

// const reversed = reverseString("ajay");
// console.log(reversed);

// function reverseString(str) {
//     let rev = ""
//     str.split('').filter((ele, i) => {
//         console.log(ele);
//             rev = ele + rev
//             return;
//         }).join('');
//     return rev
// }

// const reversed = reverseString("chauhan");
// console.log(reversed);


// let temp = ""
// function rev(cb,str) {
//     temp += str.at(-1) 
//     cb(str.slice(0,-1))
// }

// function b(nestr) {
//     if (nestr == "") {
//         return ""
//     }
//     rev(b,nestr)
// }

// rev(b,"chauhan")
// console.log(temp);




// const myArr = ["Ajay","Chauhan"];

// Array.prototype.myLength = function () {
//     let i = 0
//     while (this[i]) {
//        i++
//     }
//     return i
// }

// console.log(myArr.myLength());


// const str = "ajay";

// const myArr = ["Ajay", "Chauhan"];

// Object.defineProperty(Array.prototype, 'myLength', {
//     get: function () {
//         let i = 0;
//         while (this[i] !== undefined) {
//             i++;
//         }
//         return i;
//     }
// });

// Object.defineProperty(String.prototype, 'myLength', {
//     get: function () {
//         let i = 0;
//         while (this[i] !== undefined) {
//             i++;
//         }
//         return i;
//     }
// });


// console.log(str.myLength);

// const myArr2 = ["Ajay", "", 0, false, null, undefined, "Chauhan"];
// console.log(myArr2.myLength);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const newfr = fruits.splice(1, 3, "Lemon", "Kiwi");
// console.log(newfr);
// console.log(fruits);

// async function f() {
//     return 2;
// }


// console.log(f());
// console.log("hello");

// class BSTNode {
//     constructor(data) {
//         this.key = data
//         this.left = null
//         this.right = null
//     }
// }
// class BSTree {
//     constructor() {
//         this.root = null
//     }
//     insertNode(data) {
//         const newNode = new BSTNode(data);

//         if (this.root === null) {
//             this.root = newNode
//         } else {
//             this.addNode(this.root, newNode)
//         }
//     }
//     addNode(newRoot, node) {
//         if (newRoot.key > node.key) {
//             if (newRoot.left === null) {
//                 newRoot.left = node
//             } else {
//                 this.addNode(newRoot.left, node)
//             }
//         } else {
//             if (newRoot.right === null) {
//                 newRoot.right = node
//             } else {
//                 this.addNode(newRoot.right, node)
//             }
//         }
//     }
// }


// const tree = new BSTree();
// tree.insertNode(80)
// tree.insertNode(60)
// tree.insertNode(70)
// tree.insertNode(80)
// console.log(tree);


// function isPrime(n) {
//     if (n <= 1)
//         return false;

//     // Check from 2 to n-1
//     for (let i = 2; i < n; i++) {
//         console.log("n is..",n%i);
//         if (n % i == 0) {
//             return false;
//         }

//     }
//     return true;
// }

// isPrime(3)
//     ? console.log("true")
//     : console.log("false");