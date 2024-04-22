//arrow function
//Return all the palindromes in an array

let words = ["hello", "level", "world", "racecar", "noon"];

let findPalindromes = (arr) => {
    let isPalindrome = (word) => {
        return word === word.split('').reverse().join('');
    };

    return arr.filter(word => isPalindrome(word));
};

console.log(findPalindromes(words));