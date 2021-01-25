// Calcuation time complexity with iterative algorithm

const numbers = [4, 100, 401, 1001, 42, 42, 424, 55, 2000];

function findBiggestNumber(arr) {
    let biggest = arr[0]; // O(1)

    for (let i = 1; i < arr.length; i++) { // O(n - 1) = O(n)
        if (biggest < arr[i]) {  // O(1)
            biggest = arr[i]; // O(1)
        }
    }
    return biggest; // O(1)
}

console.log(findBiggestNumber(numbers));

/* 
    time complexity = O(1) + O(n) + O(1) + O(1)
                    = O(n)
*/