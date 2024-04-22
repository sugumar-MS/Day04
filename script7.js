//Remove duplicates from an array   
//Anonymous Function:

let array = [1, 2, 2, 3, 4, 4, 5, 5];

let removeDuplicates = function(arr) {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
};

console.log(removeDuplicates(array));

//IIFE

let uniqueArray = (function(arr) {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
})(array);

console.log(uniqueArray);
