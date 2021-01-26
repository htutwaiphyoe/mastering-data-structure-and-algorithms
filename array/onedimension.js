// Creating an array
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

// Insering a value in an array
let arr3 = new Array(3);

function insert(arr, value, location) {
    if (arr3[location]) { // O(1)
        return "Location is already occupied!"; // O(1)
    }
    arr[location] = value; // O(1)
}

insert(arr3, 1, 1);
console.table(arr3);

// Traversing an array

function traverseArray(arr) {
    for(let i = 0; i < arr.length; i++) { // O(n)
        console.log(arr[i]); // O(1)
    }
}

traverseArray(arr3);

// Accessing value of an array

function accessValue(arr, location){
    if(location >= arr.length){ // O(1)
        return "Cell number is greater than array length"; // O(1)
    }
    return arr[location]; // O(1)
}

console.log(accessValue(arr, 3));