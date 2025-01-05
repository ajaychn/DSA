
// 0,1,1,2,3,5,8,13
// fibonacci
function fib(n) {
    if (n <= 1) {
        return n
    }

    return fib(n - 1) + fib(n - 2)
}
// console.time()
// console.log(fib(4));
// console.timeEnd()

// fibonacci with memoization
function fibMemo(n, memo = {}) {
    // console.log(n);
    if (n in memo) {
        // console.log("inside memo..",n, memo[n]);  
        return memo[n]
    }
    if (n <= 1) {
        return n
    }

    const left = fibMemo(n - 1, memo)
    const right = fibMemo(n - 2, memo)
    const reslut = left + right
    // console.log(n,"left =",left,"right =",right, "=",reslut);
    // console.log("after", n, " = ", left + right);
    memo[n] = reslut
    return memo[n]
}
// console.time()
// console.log(fibMemo(4));
// console.timeEnd()



// function measurePerformance(func, n) {
//     const start = performance.now();
//     const result = func(n);
//     const end = performance.now();
//     return { result, time: end - start };
// }

// const n = 45; // Example input for testing

// // Measure performance of the recursive approach
// // Measure performance of the memoized approach
// const memoResult = measurePerformance(fibMemo, n);
// console.log(`Memoized: Result = ${memoResult.result}, Time = ${memoResult.time}ms`);

// const recursiveResult = measurePerformance(fib, n);
// console.log(`Recursive: Result = ${recursiveResult.result}, Time = ${recursiveResult.time}ms`);





// tribonacci
// 0,1,1,2,4,7,13,24,44

// function tribonacci(n) {
//     if (n === 0) {
//         return 0
//     }
//     if (n === 1 || n === 2) {
//         return 1
//     }

//     return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
// }

// console.log(tribonacci(8));


// function memoFunc() {
//     const memo = {}

//     return function getSqureRoot(x) {
//         if (memo[x]) {
//             return memo[x];
//         }

//         const time = Date.now()
//         let curTime = time
//         while (time + 1000 > curTime) {
//             curTime = Date.now();
//             console.log("Calculating...",curTime - time);
//         }
//         const st = +Math.sqrt(x).toFixed(2);
//         memo[x] = st
//         return st
//     }
// }



// const fn = memoFunc();
// console.log(getSqureRoot(64));



// fibonacci with Tabulation (Bottom-Up Approach);

// function fib(n) {
//     if (n <= 1) return n;

//     const dp = new Array(n + 1);
//     dp[0] = 0;
//     dp[1] = 1;

//     for (let i = 2; i <= n; i++) {
//         // console.log(`${dp[i - 1]} + ${dp[i - 2]} = ${dp[i - 1] + dp[i - 2]}`);
//         dp[i] = dp[i - 1] + dp[i - 2];
//     }
//     return dp[n];
// }

// console.log(fib(6)); // Output: 13



// coin sum problem 


// function sumOfPosibles(target, coins, memo = {}) {
//     if (target in memo) {
//         return memo[target]
//     }
//     if (target === 0) {
//         return true
//     }
//     if (target < 0) {
//         return false
//     }

//     for (const num of coins) {
//         if (sumOfPosibles(target - num, coins, memo)) {
//             memo[target] = true
//             return true
//         }
//     }
//     return false
// }
// console.log(sumOfPosibles(4, [1, 2, 3]));





// function coinChange(coins, amount) {
//     const dp = Array(amount + 1).fill(0);
//     const combinations = Array.from({ length: amount + 1 }, () => []);
//     dp[0] = 1; // There's one way to make 0, which is not to use any coins
//     combinations[0] = [[]]; // The only way to form amount 0 is by using no coins

//     for (const coin of coins) {
//         for (let i = coin; i <= amount; i++) {
//             dp[i] += dp[i - coin];

//             // Add new combinations for amount i
//             for (const combo of combinations[i - coin]) {
//                 combinations[i].push([...combo, coin]);
//             }
//         }
//     }

//     return {
//         ways: dp[amount],
//         combinations: combinations[amount]
//     };
// }

// // Example usage:
// const amount = 4;
// const coins = [1, 2, 3];
// const result = coinChange(coins, amount);
// console.log(`Number of ways: ${result.ways}`); // Output: 4
// console.log('Combinations:');
// result.combinations.forEach((combo, index) => {
//     console.log(`Combination ${index + 1}: ${combo}`);
// });




// function coinChange(coins, amount) {
//     const dp = Array(amount + 1).fill(0);
//     console.log(dp);
//     dp[0] = 1;

//     for (const coin of coins) {
//         for (let i = coin; i <= amount; i++) {
//             console.log(`i = ${i} coin = ${coin}`);
//             dp[i] += dp[i - coin];
//         }
//         console.log(dp);
//     }
//     return dp[amount];
// }

// // Example usage:
// const amount = 4;
// const coins = [1, 2, 3];
// console.log(coinChange(coins, amount)); // Output: 4









// Robot Destinestion Problem

function countPath(grid, row = 0, col = 0) {
    // const pos = row + "" + col

    // if (pos in memo) {
    //     return memo[pos]
    // }

    if (row >= grid.length || col >= grid[0].length || grid[row][col] === "X") {
        // console.log("..",row);
        return 0
    }
    // check if you have arived at given loction
    if (row === grid.length - 1 && col === grid[0].length - 1) {
        // console.log("hey row",row,col);
        return 1
    }
    // console.log(`row:${row},col:${col}`);
    const left = countPath(grid, row + 1, col)
    const right = countPath(grid, row, col + 1)
    console.log(`left:${left},right:${right} = ${left + right}`);
    const reslut = left + right
    // console.log(reslut);
    return reslut
}
// Example grid
const grid = [
    ["", "", "X"],
    ["", "", ""],
    ["", "", ""]
];

// console.log(countPath(grid));






function countMinMaxPath(grid, row = 0, col = 0, memo = {}) {
    const pos = row + "" + col

    if (pos in memo) {
        return memo[pos]
    }

    if (row >= grid.length || col >= grid[0].length) {
        return -Infinity
    }
    if (row === grid.length - 1 && col === grid[0].length - 1) {
        return grid[row][col]
    }


    const down = countMinMaxPath(grid, row + 1, col, memo)
    const right = countMinMaxPath(grid, row, col + 1, memo)
    memo[pos] = grid[row][col] + Math.max(down, right)
    return memo[pos]
}
const grid2 = [
    [5, 3, 8],
    [1, 2, 10],
    [4, 3, 2]
];
// console.log(countMinMaxPath(grid2));





// House Robbers Pattern

function houseRobbers(nums, i = 0, memo = {}) {
    if (i in memo) {
        return memo[i]
    }

    if (i >= nums.length) {
        // console.log(i);
        return 0
    }

    // console.log(nums[i]);
    // console.log(i);
    const skip = houseRobbers(nums, i + 1, memo);
    const take = nums[i] + houseRobbers(nums, i + 2, memo);
    console.log(i);
    console.log(`skip is:${skip} and the take is: ${take}`);
    memo[i] = Math.max(skip, take)
    return memo[i]
}
// console.log(houseRobbers([2, 7, 9, 3, 1]));
