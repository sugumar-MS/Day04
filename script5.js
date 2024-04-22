//Return all the palindromes in an array
//Anonymous Function:

let words = ["hello", "level", "world", "racecar", "noon"];

let findPalindromes = function(arr) {
    let palindromes = [];
    
    let isPalindrome = function(word) {
        return word === word.split('').reverse().join('');
    };
    
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            palindromes.push(arr[i]);
        }
    }
    
    return palindromes;
};

console.log(findPalindromes(words));

//IIFE


let palindromes = (function(arr) {
    let palindromes = [];
    
    let isPalindrome = function(word) {
        return word === word.split('').reverse().join('');
    };
    
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            palindromes.push(arr[i]);
        }
    }
    
    return palindromes;
})(words);

console.log(palindromes);