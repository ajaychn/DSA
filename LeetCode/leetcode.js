
// ---merge string Alternately---

// function mergeAlternately(word1, word2) {
//     let mergeStr = ""
//     let i = 0;
//     let j = 0;
//     while (i < word1.length && j < word2.length) {
//         mergeStr += word1[i]
//         mergeStr += word2[j]
//         i++;
//         j++
//     }
//     while (i < word1.length) {
//         mergeStr += word1[i]
//         i++;
//     }
//     while (j < word2.length) {
//         mergeStr += word2[j]
//         j++
//     }
//     return mergeStr;
// }

// console.log(mergeAlternately("ajay", 'singh'));


// OR

// function mergeAlternately(word1, word2) {
//     let mergeStr = "";
//     let maxLength = Math.max(word1.length, word2.length);

//     for (let i = 0; i < maxLength; i++) {
//         if (i < word1.length) {
//             mergeStr += word1[i];
//         }
//         if (i < word2.length) {
//             mergeStr += word2[i];
//         }
//     }
//     return mergeStr;
// }
// console.log(mergeAlternately("ajay", "singh"));





// --- candies problem ---

// function kidWithCandies(arr, extraCandi) {
//     const maxCandies = Math.max(...arr)
//     console.log(maxCandies);
//     // let newArr;
//     const ab = arr.map((ele) => {
//         return ele + extraCandi >= maxCandies
//     })
//     console.log(ab);

// }
// console.log(kidWithCandies([1, 2, 3, 5, 0], 3));





// Flowerbed plantation problem

// const canPlaceFlowers = function (flower, n) {
//     let count = 0

//     for (let i = 0; i < flower.length; i++) {
//         if (flower[i] === 0) {
//             let isLeftEmpty = (i === 0 || flower[i - 1] === 0)
//             console.log("....", i, flower[i - 1] === 0);
//             let isRightEmpty = (i === flower.length - 1 || flower[i + 1] === 0)
//             if (isLeftEmpty && isRightEmpty) {
//                 flower[i] = 1
//                 count++

//                 if (count >= n) {
//                     return true
//                 }
//             }
//         }
//     }
//     return count >= n
// }
// console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 1));





// Two pointers techniqe

function reverseVowels(s) {
  const vowels = 'aeiouAEIOU';
  let chars = s.split('');
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    while (left < right && !vowels.includes(chars[left])) {
      left++;
    }
    while (left < right && !vowels.includes(chars[right])) {
      right--;
    }
    if (left < right) {
      console.log([chars[left], chars[right]] = [chars[right], chars[left]]);
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left++;
      right--;
    }
  }

  return chars.join('');
}

// console.log(reverseVowels('hello'));
//   console.log(reverseVowels('leetcode'));



// OR

function reverseVowels(s) {
  const vowels = 'aeiouAEIOU';
  const vowelList = [];

  for (const char of s) {
    if (vowels.includes(char)) {
      vowelList.push(char);
    }
  }
  vowelList.reverse();
  let result = '';
  let vowelIndex = 0;
  for (const char of s) {
    if (vowels.includes(char)) {
      result += vowelList[vowelIndex++];
    } else {
      result += char;
    }
  }
  return result;
}

//   console.log(reverseVowels('hello'));
//   console.log(reverseVowels('leetcode'));






// reverse the sentence

// function reverseSentence(string) {
//   string = string.split(' ').reverse().join(' ');
//   console.log(string);
// }

// console.log(reverseSentence('hello i am the ajay chauhan'));



// function reverseSentence(string) {
//   let result = []
//   let length = string.length

//   let word = ''

//   for (let i = 0; i < length; i++) {
//     if (string[i] !== ' ') {
//       word += string[i]
//     }else if(word.length > 0){
//       result.unshift(word);
//       word = ''
//     }
//   }
//   if (word.length > 0) {
//     result.unshift(word)
//   }
//   return result.join(' ')
// }

// console.log(reverseSentence('hello i am the ajay chauhan'));





// prooduct of array except itself
// [24, 12, 8, 6]

// [1, 2, 3, 4]

// l = [1, 1, 2, 6]
// r = [24, 12, 4, 1]

// [24, 12, 8, 6]

// function productExceptItself(arr) {
//   let length = arr.length
//   let left = new Array(length).fill(1);
//   let right = new Array(length).fill(1);

//   let result = []
//   // left
//   for (let i = 1; i < length; i++) {
//     left[i] = arr[i - 1] * left[i - 1];
//   }
//   // right

//   for (let i = length - 2; i >= 0; i--) {
//     right[i] = arr[i + 1] * right[i + 1]
//   }

//   for (let i = 0; i < left.length; i++) {
//     result.push(left[i]*right[i]);
//   }
//   return result;
// }

// console.log(productExceptItself([1, 2, 3, 4]));






// increase triplet subsequence


// function increasingTriplet(arr) {
//   let ssmall = Infinity;
//   let sSecondSmallest = Infinity;

//   for (const num of arr) {
//     if (ssmall >= num) {
//       ssmall = num
//     }else if (sSecondSmallest >= num) {
//       sSecondSmallest = num
//     }else{
//       return true
//     }
//   }
//   return false
// }

// console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));





// string compression


// function compres(char) {
//   let index = 0;
//   let i = 0;

//   while (i < char.length) {
//     let j = i

//     while (j < char.length && char[j] === char[i]) {
//       j++;
//     }

//     let count = j - 1;
//     char[index++] = char[i];

//     if (count > 1) {
//       for (const str of count.toString()) {
//         char[index++] = str
//       }
//     }
//     i = j;
//   }

//   return index

// }

// console.log(compres('a','a','b','b','c','c'));



// move zeroes 2 pointer technique


// function moveZeroes(nums) {

//   let writeIndex = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] != 0) {
//       nums[writeIndex] = nums[i];
//       writeIndex++;
//     }
//   }
//   console.log(writeIndex);
//   while (writeIndex < nums.length) {
//     nums[writeIndex] = 0
//     writeIndex++;
//   }
//   console.log(writeIndex);
//   return nums;
// }

// console.log(moveZeroes([0, 1, 0, 3, 12]));



// isSubsequence 2 pointer technique

// function isSubsequence(s,t) {
//   let sIndex = 0;

//   for (const char of t) {
//     if (sIndex === s.length) break
//     if (s[sIndex] === char) sIndex++
//   }
//   return sIndex === s.length;
// }
// console.log(isSubsequence('abc','ahbgdc'));





// container with most water 2 pointer technique


// function maxArea(height) {
//   let maxWater = 0;
//   let left = 0;
//   let right = height.length - 1;

//   while (left < right) {
//     let currentHeight = Math.min(height[left], height[right]);

//     let currentWidth = right - left
//     let currentArea = currentHeight * currentWidth;

//     maxWater = Math.max(maxWater, currentArea);
//     if (height[left] < height[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return maxWater
// }

// console.log(maxArea([1, 6, 2, 5, 4, 8, 3, 7]));




// max number of k sum pairs 2 pointer technique

// method 1

// function maxOperations(num, k) {
//   num.sort((a, b) => a - b);

//   let left = 0;
//   let right = num.length - 1;
//   let operations = 0;

//   while (left < right) {
//     let sum = num[left] + num[right]
//     if (sum === k) {
//       operations++
//       left++
//       right--
//     } else if (sum < k) {
//       left++
//     } else {
//       right--
//     }
//   }
//   console.log(operations);
//   return operations
// }

// console.log(maxOperations([1, 2, 3, 4], 5));

// method 2
// function maxOperations(nums, k) {
//   let map = new Map()
//   let operations = 0;

//   for (const num of nums) {
//     let compliment = k - num;
//     if (map.get(compliment) > 0) {
//       operations++;
//       map.set(compliment,map.get(compliment) - 1)
//     }else{
//       map.set(num,(map.get(num) || 0) + 1)
//     }
//   }
//   return operations
// }

// console.log(maxOperations([1, 2, 3, 4], 5));






// Max average array sliding window


// function findMaxAverage(nums, k) {
//   let sum = 0;

//   for (let i = 0; i < k; i++) {
//     sum += nums[i];
//   }
//   let maxSum = sum;
//   for (let i = k; i < nums.length; i++) {
//     sum = sum - nums[i - k] + nums[i]
//     console.log('sum..',sum);
//     maxSum = Math.max(maxSum,sum)
//   }
//   return maxSum / k
// }

// console.log(findMaxAverage([1, 2, 3, 4, 5, 6], 3));




// max vowel in substring

// function maxVowels(s,k) {
//   const vowels = new Set(['a','e','i','o','u']);
//   let currentVowelCount = 0, maxVowelCount = 0;

//   for (let i = 0; i < k; i++) {
//     if (vowels.has(s[i])) {
//       currentVowelCount++
//     }
//   }

//   maxVowelCount = currentVowelCount;

//   for (let i = k; i < s.length; i++) {
//     if (vowels.has(s[i])) {
//         currentVowelCount++
//     }
//     if (vowels.has(s[i-k])) {
//         currentVowelCount--
//     }

//     maxVowelCount = Math.max(maxVowelCount,currentVowelCount)
//   }

//   return maxVowelCount;
// } 

// console.log(maxVowels('abciiidef',3));




// max consecutive once

// function longestOnce(nums, k) {
//   let left = 0;
//   let zeroCount = 0;
//   let maxLen = 0;


//   for (let right = 0; right < nums.length; right++) {
//     if (nums[right] === 0) {
//       zeroCount++;
//     }
//     while (zeroCount > k) {
//       if (nums[left] === 0) {
//         zeroCount--;
//       }
//       left++
//     }

//     maxLen = Math.max(maxLen, right - left + 1);
//   }

//   return maxLen;
// }

// console.log(longestOnce([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));





// after deleting one element

// function longestSubarray(nums) {
//   let left = 0;
//   let zeroCount = 0;
//   let maxLen = 0;

//   for (let right = 0; right < nums.length; right++) {
//     if (nums[right] === 0) {
//       zeroCount++;
//     }
//     while (zeroCount > 1) {
//       if (nums[left] === 0) {
//         zeroCount--;
//       }
//       left++
//     }
//     if (zeroCount === 1) {
//       maxLen = Math.max(maxLen, right - left);
//     }
//   }
//   return zeroCount === 0 ? nums.length - 1 : maxLen
// }

// console.log(longestSubarray([1,1,0,1,1,1,0]));





// ----Prefix Sum technique-----
// find the highest altitude

// function largestAltitude(gain) {
//   let currentAltitude = 0;
//   let maxAltitude = 0;

//   for (let i = 0; i < gain.length; i++) {
//     currentAltitude += gain[i];
//     maxAltitude = Math.max(currentAltitude,maxAltitude)
//   }
//   return maxAltitude;
// }

// console.log(largestAltitude([-5,1,5,0,-7]));


// Pivot Index

// function pivotIndex(nums) {
//   const totalSum = nums.reduce((accum,ele)=>{
//     return accum + ele
//   },0);

//   let leftSum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let rightSum = totalSum - leftSum - nums[i];

//     if (leftSum === rightSum) {
//       return i
//     }
//     leftSum += nums[i]
//   }
//   return -1
// }

// console.log(pivotIndex([1,7,3,6,5,6]));



// difference of two array

// function findDifference(nums1, nums2) {
//   const set1 = new Set(nums1);
//   const set2 = new Set(nums2);
//   const unique1 = [...set1].filter((x)=>{
//     return !set2.has(x)
//   })
//   const unique2 = [...set2].filter((x)=>{
//     return !set1.has(x)
//   })

//   return [unique1,unique2]
// }
// console.log(findDifference([1, 2, 3], [2, 4, 6]));



// Unique number of occurrence

// function uniqueOccurrence(arr) {
//   const countMap = new Map()

//   for (const num of arr) {
//     countMap.set(num,(countMap.get(num) || 0) + 1)
//   }
//   const countSet = new Set()

//   for (const count of countMap.values()) {
//     if (countSet.has(count)) {
//         return false
//     }
//     countSet.add(count)
//   }
//   return true
// }
// console.log(uniqueOccurrence([1, 2, 2, 1, 1, 3]));




// Two strings are close

// function closeStrings(word1, word2) {
//   if (word1.length !== word2.length) {
//     return false
//   }

//   const frequencyMap1 = new Map();
//   const frequencyMap2 = new Map();

//   for (const char of word1) {
//     frequencyMap1.set(char, (frequencyMap1.get(char) || 0) + 1);
//   }

//   for (const char of word1) {
//     frequencyMap2.set(char, (frequencyMap2.get(char) || 0) + 1);
//   }

//   const characters1 = new Set(frequencyMap1.keys)
//   const characters2 = new Set(frequencyMap2.keys)

//   if (characters1.size !== characters2.size) {
//       return false;
//   }

//   const haveSameCharacters = [...characters1].every((char => characters2.has(char)))

//   if (!haveSameCharacters) {
//     return false;
//   }

//   const sortedFrequency1 = Array.from(frequencyMap1.values()).sort((a,b)=>a-b);
//   const sortedFrequency2 = Array.from(frequencyMap2.values()).sort((a,b)=>a-b);

//   const frequencyIdentical = sortedFrequency1.join(',') === sortedFrequency2.join(',')

//   if (!frequencyIdentical) {
//     return false
//   }

//   return true;
// }
// console.log(uniqueOccurrence([1, 2, 2, 1, 1, 3]));




// Equal row and column pairs

// function equalPairs(grid) {
//   let cols = []

//   for (let j = 0; j < grid.length; j++) {
//     for (let i = 0; i < grid.length; i++) {
//       cols.push(grid[i][j])      
//     }    
//   }
//   console.log(cols);
// }

// let grid = [
//   [3, 2, 1],
//   [1, 7, 6],
//   [2, 7, 7]
// ]

// console.log(equalPairs(grid));

// function equalPairs(grid) {
//   const n = grid.length;
//   const rowMap = new Map();

//   for (let i = 0; i < n; i++) {
//     const rowStr = grid[i].join(',');
//     rowMap.set(rowStr, (rowMap.get(rowStr) || 0) + 1)
//   }
//   let count = 0;
//   for (let j = 0; j < n; j++) {
//     let colArr = []
//     for (let i = 0; i < n; i++) {
//       colArr.push(grid[i][j])
//     }
//     const colstr = colArr.join(',')
//     if (rowMap.has(colstr)) {
//       count += rowMap.get(colstr)
//     }
//   }

//   return count;
// }

// let grid = [
//   [3, 2, 1],
//   [1, 7, 6],
//   [2, 7, 7]
// ]

// console.log(equalPairs(grid));




// ----- stack ----
// remove start from string
// function removeStars(s) {
//   const stack = [];

//   for (const char of s) {
//     if (char === "*") {
//         stack.pop()
//     }else{
//       stack.push(char)
//     }
//   }
//   return stack.join('')
// }

// console.log(removeStars("leet**cod*e"));



// Asteroid collision

// function asteroidCollision(asteroids) {
//   const stack = [];

//   for (let asteroid of asteroids) {
//     let explode = false;

//     while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {

//       const rightAsteroid = stack.pop();

//       if (Math.abs(asteroid) === rightAsteroid) {
//         explode = true;
//         break;
//       } else if (Math.abs(asteroid) < rightAsteroid) {
//         asteroid = 0;
//         stack.push(rightAsteroid);
//         break;
//       }
//     }

//     if (!explode && asteroid !== 0) {
//       stack.push(asteroid)
//     }
//   }
//   return stack
// }

// console.log(asteroidCollision([5, 10, -5]));
// console.log(asteroidCollision([8, -8]));
// console.log(asteroidCollision([10, 2, -5]));




// Decode String

// let s = "29a";
// let curNum = 0;

// for (const char of s) {
//   if (char >= '0' && char <= '9') {
//     curNum = curNum * 10 + (char - '0');
//   }
// }
// console.log(curNum);



// function decodeString(s) {
//   let stack = [];
//   let currNum = 0;
//   let currStr = ''

//   for (const char of s) {
//     if (char >= '0' && char <= '9') {
//       currNum = currNum * 10 + (char - '0');
//     }else if(char === '['){
//       stack.push(currNum);
//       stack.push(currStr)

//       // reset
//       currNum = 0;
//       currStr = '';
//     }else if(char === ']'){
//       let prevStr = stack.pop();
//       let repeatTimes = stack.pop();

//       currStr =  prevStr + currStr.repeat(repeatTimes)
//     }else{
//       currStr += char
//     }
//   }
//   return currStr
// }

// console.log(decodeString("3[a]2[bc]"));