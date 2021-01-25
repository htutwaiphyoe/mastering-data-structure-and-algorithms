// Calcuation time complexity with recursive algorithm (linear search)

const numbers = [4000, 100, 401, 1001, 42, 42, 424, 55, 2000, 3000];

let biggest = Number.MIN_VALUE;

function findBiggestNumber(arr, n) { // T(n) = time to run this function
    if (n === -1) { // O(1)
        return biggest; // O(1)
    } else {
        if (arr[n] > biggest) { // O(1)
            biggest = arr[n]; // O(1)
        }
    }
    return findBiggestNumber(arr, n - 1); // T(n - 1) = time to run this function with different inputs
}

console.log(findBiggestNumber(numbers, numbers.length - 1));

/* 
    Back substitution:
    T(n) = O(1) + O(1) + O(1) + O(1) + T(n - 1)
         = O(1) + T(n - 1) ---------- first recursive call
    
    T(-1) = O(1) ----------------- base case

    T(n - 1) = O(1) + T((n - 1) - 1)
             = O(1) + T(n - 2) ----- second recursive call
    
    T(n - 2) = O(1) + T(n - 3) --- third recursive call
    .....

    T(n) = 1 + T(n - 1)
         = 1 + (1 + T(n - 2))
         = 2 + T(n - 2)
         = 2 + (1 + T(n - 3))
         = k + T(n - k)
         = (n + 1) + T(n - (n + 1))
         = n + 1 + T(-1)
         = n + 1 + 1
         = n
         
    time complexity = O(n)
*/
