//Return median of two sorted arrays of the same size
//Anonymous Function:

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let findMedian = function(arr1, arr2) {
    let merged = arr1.concat(arr2);
    let n = merged.length;
    merged.sort((a, b) => a - b);
    
    if (n % 2 === 0) {
        return (merged[n / 2 - 1] + merged[n / 2]) / 2;
    } else {
        return merged[Math.floor(n / 2)];
    }
};

console.log(findMedian(arr1, arr2));

//IIFE

let median = (function(arr1, arr2) {
    let merged = arr1.concat(arr2);
    let n = merged.length;
    merged.sort((a, b) => a - b);
    
    if (n % 2 === 0) {
        return (merged[n / 2 - 1] + merged[n / 2]) / 2;
    } else {
        return merged[Math.floor(n / 2)];
    }
})(arr1, arr2);

console.log(median);