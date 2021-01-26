// declaration: creating reference variable
let arr; // O(1)

// instantiation: creating array and assign first cell address in reference variable
arr = new Array(5); // O(1)

// initialization: creating default value for each cell
arr[0] = 0; // O(1)-----
arr[1] = 1; // O(1)    -
arr[2] = 2; // O(1)    ---- O(n) // because it depends on size of array
arr[3] = 3; // O(1)    -
arr[4] = 4; // O(1)-----

// shorthand (combination of declaration, instantiation and initialization)
let arr2 = [0, 1, 2, 3, 4]; // O(1)

console.table(arr);
console.table(arr2);