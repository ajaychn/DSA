
// const factorial = (n)=>{
//     if (n === 0) {
//         return 1
//     }
//     return n * factorial(--n)
// }

// console.log(factorial(5));


const reverseString = (string) => {
    let reverse = ""
    let length = string.length - 1
    while (length >= 0) {
        reverse += string[length]
        length--;
    }
    return reverse
}
// console.log(reverseString('ajay')); aja,aj,a,

const recursiveReverseString = (string) => {
    if (string === "") {
        return string
    }
    const reversePart = recursiveReverseString(string.substring(0, string.length - 1))
    console.log(reversePart);
    const result = string[string.length - 1] + reversePart

    return result
}

// console.log(recursiveReverseString('ajay'));



// count vowels in string

// function isVowel(string) {
//     string = string.toLowerCase()
//     let vowels = "aeiou";
//     if (vowels.indexOf(string) !== -1) {
//         return true;
//     }else{
//         return false;
//     }
// }

// function countVowels(string) {
//     let count = 0
//     for (let i = 0; i < string.length; i++) {
//         if (isVowel(string[i])) {
//             count++
//         }
//     }
//     return count
// }
// console.log(countVowels("sky"));

// function recursiveCountVowels(string,length) {
//     if (length == 1) {
//         return Number(isVowel(string[0]))
//     }
//     const result = recursiveCountVowels(string,length-1) + isVowel(string[length-1])
//     return result;
// }
// let myString = "ajay"
// console.log(recursiveCountVowels(myString, myString.length));





// arr = [3,4,1,8,1,7]
//findMe = 1
//currentIndex = 0
//output = 2
// if not found = -1

// iterative
// function firstOcc(arr,target,index) {
//     while (index < arr.length) {
//         if (arr[index] == target) {
//             return index
//         }
//         index++
//     }
//     return -1
// }
// const arr = [3,4,1,8,1,7]
// console.log(firstOcc(arr,3,0));


// recursive
// function recursiveFirstOcc(arr,target,index) {
//     if (arr.length === index) {
//         return -1
//     }
//     if (arr[index] == target) {
//         return index
//     }
//     return recursiveFirstOcc(arr,target,index+1)
// }

// console.log(recursiveFirstOcc(arr,7,0));





// fibonacci
//exl-> 0 1 1 2 3 5 8
// iterative
// 1 1 2 3 5

// function fibonacci(value) {
//     let n0 = 0;
//     let n1 = 1;
//     for (let i = 0; i < value; i++) {
//         temp = n0 + n1
//         n0 = n1
//         n1 = temp  
//         console.log("jjini-uji",n1);
//     }
//     return n0;
// }

// console.log(fibonacci(3));

// function recursiveFibonacci(n) {
//     if (n <= 1) {
//         return n
//     }
//     return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
// }
// console.log(recursiveFibonacci(4))



// power of number
//2x2x2x2
// function power(val, exp) {
//     if (exp == 0) {
//         return 1
//     }
//     const func = power(val, exp - 1);
//     // console.log(func);
//     // console.log(`val:${val}*${func} = ${val*func}`);
//     return val * func
// }
// console.log(power(2, 4));



// sum of n numbers
// ex- 12345
// output = 15
// function getSum(num) {
//     if (num == 1) {
//         return num
//     }
//     const result = getSum(num-1)
//     console.log(`num is ${num} + ${result} = ${num+result}`);
//     return num + result
// }

// console.log(getSum(3));



// remove all tabs and spaces from the string

// function removeTAS(string) {
//     let temp = ""
//     for (let i = 0; i < string.length; i++) {
//         const char = string[i];
//         if (char !== " " && char !== "\t") {
//             temp += char
//         }
//     }
//     return temp
// }

// console.log(removeTAS("he llo    a jay"));


// function recursiveRemoveTAS(string) {
//     if (string.length == 0) {
//         return ""
//     }
//     const firstChar = string[0];
//     const restString = string.slice(1);
//     if (firstChar === " " || firstChar === "\t") {
//         return recursiveRemoveTAS(restString)
//     }else{
//         return firstChar + recursiveRemoveTAS(restString)
//     }
// }

// console.log(recursiveRemoveTAS("he llo    a jay"));




// function removeAdjDup(string) {
//     let result = "";
//     for (let i = 0; i < string.length; i++) {
//         if (i === string.length - 1 || string[i] !== string[i+1]) {
//             const element = string[i];
//             console.log(element);
//             result += element
//         }
//     }
//     console.log(result);
// }
// console.log(removeAdjDup("aajjaayy"));

// function recursiveRAD(string) {
//     if (string.length <= 1) {
//         return string
//     }
//     if (string[0] === string[1]) {
//         return recursiveRAD(string.substring(1))
//     } else {
//         return recursiveRAD(string[0]) + recursiveRAD(string.substring(1))
//     }
// }

// console.log(recursiveRAD("aajjaayy"));


// implement length without using length in

// function recursiveLength(string) {
//     if (string === "") {
//         return 0;
//     }else{
//         return 1 + recursiveLength(string.substring(1))
//     }
// }
// console.log(recursiveLength("ajay"));


// function findLenth(string) {
//     let count = 0;
//     while (string[count] !== undefined) {
//         count++;
//         console.log(count);
//     }
//     return count;
// }
// console.log(findLenth("ajaychn"));



// palindrome

// function isPalindrome(string) {
//     if (string.length <= 1) {
//         return true
//     }
//     if (string[0] == string[string.length - 1]) {
//         return isPalindrome(string.substring(1,string.length - 1))
//     }else{
//         return false
//     }
// }
// console.log(isPalindrome("ata"));



//[1,2,4,2,4,2,6]
// key = 2

// function countKeyIA(arr,key) {
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//         const ele = arr[i];
//         if (ele === key) {
//             count++
//         }
//     }
//     return count;
// }
// const arr = [1,2,4,2,4,2,6,2,4,6];
// console.log(countKeyIA(arr,2));


// function recursiveCountKeyIA(arr, key, i = 0) {
//     if (i >= arr.length) {
//         return 0
//     }
//     return (arr[i] === key ? 1 : 0) + recursiveCountKeyIA(arr,key,i+1)
// }

// const arr = [1, 2, 4, 2];
// console.log(recursiveCountKeyIA(arr, 2));



// input ["(","(",")",")","(",")"]


// function balancePer(arr, startInd = 0, currInd = 0) {
//     if (startInd == arr.length) {
//         return currInd == 0
//     }
//     if (currInd < 0) {
//         return false
//     }

//     if (arr[startInd] == "(") {
//         return balancePer(arr, startInd + 1, currInd + 1)
//     } else if (arr[startInd] == ")") {
//         return balancePer(arr, startInd + 1, currInd - 1)
//     } else {
//         return false
//     }
// }
// console.log(balancePer(["(", "(", ")", ")", "(", ")"]));