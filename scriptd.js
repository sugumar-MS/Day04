//arrow function
//Return all the prime numbers in an array


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let findPrimes = (arr) => {
    let isPrime = (num) => {
        if (num <= 1) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    return arr.filter(num => isPrime(num));
};

console.log(findPrimes(numbers));