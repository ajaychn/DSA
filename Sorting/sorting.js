
// ---- Bubble sort ---

function bubbleSort(arr) {
    let isSwaped;
    do {
        isSwaped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] && arr[i + 1] && arr[i] > arr[i + 1]) {
                console.log("array..", arr);
                const temp = arr[i];
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                isSwaped = true
            }
        }
    } while (isSwaped);
    return arr
}

// console.log(bubbleSort([4, 3, 2, 1]));




// ---- Insertion Sort ----

function insertionSort(arr) {
    // start from second position
    for (let i = 0; i < arr.length; i++) {
        let currElem = arr[i];
        let j = i - 1;
        console.log(j);
        while (j >= 0 && arr[j] > currElem) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currElem;
    }
    return arr
}
// console.log(insertionSort([1, 6, 7, 4, 2, 9]));



//  ---- Merge sort ----
// function mergeSort(arr) {
//     if (arr.length === 1) {
//         return arr
//     }

//     const middle = Math.floor(arr.length / 2);
//     const left = arr.slice(0, middle);
//     const right = arr.slice(middle);

//     return merge(mergeSort(left), mergeSort(right))
// }

// function merge(left, right) {
//     let result = [];
//     let leftBox = 0;
//     let rightBox = 0;

//     while (leftBox < left.length && rightBox < right.length) {
//         if (left[leftBox] < right[rightBox]) {
//             result.push(left[leftBox]);
//             leftBox++;
//         } else {
//             result.push(right[rightBox]);
//             rightBox++;
//         }
//     }
//     // return result.concat(left.slice(leftBox)).concat(right.slice(rightBox));
//     return [...result, ...left.slice(leftBox), ...right.slice(rightBox)]
// }
// console.log(mergeSort([6, 5, 3, 1, 8, 7, 2, 4]));






// ---- Quick sort ----

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let pivotIndex = partisan(arr, low, high)

        quickSort(arr, low, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, high)
    }
    return arr;
}

function partisan(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    return i + 1;
}
// console.log(quickSort([8, 2, 4, 7, 1, 3, 9, 6, 5]));






// ---- Selection sort ----

// function selectionSort(arr) {
//     let n = arr.length - 1

//     for (let i = 0; i < n; i++) {
//         let minIndex = i;

//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j
//             }
//         }

//         if (minIndex !== i) {
//             [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
//         }
//     }
//     return arr;
// }

// console.log(quickSort([2, 6, 4, 1, 5, 3]));




function demo(arr) {
    let middle = Math.floor(arr.length / 2)

    let left = arr.splice(0,middle);
    let right = arr.splice(middle);

    for (let i = 0; i < arr.length; i++) {
                
    }
}

console.log(demo([6, 5, 3, 1, 8, 7, 2, 4]));
