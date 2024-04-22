//Rotate an array by k times
//Anonymous Function:

let array = [1, 2, 3, 4, 5];
let k = 3;

let rotateArray = function(arr, k) {
    for (let i = 0; i < k; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    return arr;
};

console.log(rotateArray(array, k));

//IIFE

let rotatedArray = (function(arr, k) {
    for (let i = 0; i < k; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    return arr;
})(array, k);

console.log(rotatedArray);