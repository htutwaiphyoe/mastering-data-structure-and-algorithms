// Calcuation time complexity with recursive algorithm (binary search)

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

function findNumber(number, arr) { // T(n)
    if (arr.length === 1) { // O(1)
        if (arr[0] === number) { // O(1)
            return true; // O(1)
        }
        return false; // O(1)
    }

    let mid = Math.floor(arr.length / 2); // O(1)

    if (arr[mid] > number) { // O(1)
        return findNumber(number, arr.slice(0, mid)); // T(n/2)
    } else if (arr[mid] < number) { // O(1)
        return findNumber(number, arr.slice(mid)); // T(n/2)
    } else {
        return true; // O(1)
    }
}

console.log(findNumber(1, numbers));

/* 
    Back substitution:
    T(n) = O(1) + T(n/2) ---------- first recursive call

    T(1) = O(1) ----------------- base case
    

    T(n/2) = O(1) + T((n/2)/2)
           = O(1) + T(n/4) ----- second recursive call
    
    T(n/4) = O(1) + T((n/4)/2) 
           = O(1) + T(n/8) --- third recursive call
    .....

    T(n) = 1 + T(n/2)
         = 1 + 1 + T(n/4)
         = 2 + T(n/4)
         = 2 + 1 + T(n/8)
         = 3 + T(n/8)
         = k + T(n/2^k) 
         = log n + T(1)
         = log n + 1
         = log n
         
    time complexity = O(log n)
*/
