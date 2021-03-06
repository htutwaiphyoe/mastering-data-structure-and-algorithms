// Creating a 2D array

// declaration a reference variable
let arr; // O(1)

// instantiation array
function create2DArray(row, col) {
    let arr = new Array(row); // O(1)
    for (let i = 0; i < row; i++) { // O(n)
        arr[i] = new Array(col); // O(1)
    }
    return arr; // O(1)
}

arr = create2DArray(2, 3); // O(1)

// initialzation array
arr[0][0] = 0; // O(1) ------
arr[0][1] = 1; // O(1)      -
arr[0][2] = 2; // O(1)      -
arr[1][0] = 3; // O(1)      ---- O(n^2)
arr[1][1] = 4; // O(1)      -
arr[1][2] = 5; // O(1)-------

console.table(arr);

// shorthand
let arr2 = [
    [0, 1, 2],
    [3, 4, 5],
];  // O(1)

console.table(arr2);

// insertion 
let arr3 = [[],[]];
function insert(arr, val, row, col){
    if(arr[row][col]){ // O(1)
        return "This cell is already in use"; // O(1)
    }
    arr[row][col] = val; // O(1)
}

insert(arr3,0,1,2);
console.table(arr3);

// traversion

function traverse(arr){
    for(let i=0; i<arr.length; i++){ // O(n)             ---- O(n^2)
        for(let j=0; j<arr[i].length; j++){ // O(n)         -
            console.log(arr[i][j]); // O(1)
        }
    }
}

traverse(arr2);

// accession

function access(arr, row, col){
    if(arr[row][col]){ // O(1)
        return arr[row][col]; // O(1)
    }
    return "No value"; // O(1)
}

console.log(access(arr3,0,0))

// searching

function search(arr,val){
    for(let i=0; i<arr.length; i++){ // O(n)            ----- O(n^2)
        for(let j=0; j< arr[i].length; j++){ // O(n)    --
            if(arr[i][j] === val){ // O(1)
                return `(${i},${j})` // O(1)
            }
        }
    }
    return "No value found" // O(1)
}

console.log(search(arr2, 0))

// deletion

function deleteValue(arr, row, col){
    if(arr[row][col]){ // O(1)
        arr[row][col] = undefined // O(1)
    }
    return arr // O(1)  
}

console.log(deleteValue(arr2, 0, 1))