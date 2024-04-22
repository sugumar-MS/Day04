//Convert all the strings to title caps in a string array
//Anonymous Function:

let strings = ["hello", "world", "how", "are", "you"];

let convertToTitleCaps = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr;
};

let titleCapsStrings = convertToTitleCaps(strings);
console.log(titleCapsStrings);

//IIFE:

let str = ["hello", "world", "how", "are", "you"];

let titleCapsStr = (function(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr;
})(str);

console.log(titleCapsStrings);