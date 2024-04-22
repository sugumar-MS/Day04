//Print odd numbers in an array
//Anonymous Function:

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let printOdd = function(arr) {
    for (let ind = 0; ind < arr.length; i++) {
        if (arr[ind] % 2 !== 0) {
            console.log(arr[ind]);
        }
    }
};

printOdd(num);

//IIFE:


(function(arr) {
    for (let ind = 0; ind < arr.length; ind++) {
        if (arr[ind] % 2 !== 0) {
            console.log(arr[ind]);
        }
    }
})(num);