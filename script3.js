//Sum of all numbers in an array
//Anonymous Function:

let numbers = [1, 2, 3, 4, 5];

let sum = function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
};

console.log(sum(numbers));

//IIFE:


let Sum = (function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
})(numbers);

console.log(Sum);