//arrow function
//Convert all the strings to title caps in a string array

let strings = ["hello", "world", "how", "are", "you"];

let convertToTitleCaps = (arr) => {
    return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
};

let titleCapsStrings = convertToTitleCaps(strings);
console.log(titleCapsStrings);