//arrow function
//Sum of all numbers in an array


let numbers = [1, 2, 3, 4, 5];

let sum = (arr) => {
    return arr.reduce((total, num) => total + num, 0);
};

console.log(sum(numbers));