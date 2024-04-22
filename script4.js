//Return all the prime numbers in an array
//Anonymous Function:

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let findPrimes = function(arr) {
    let primes = [];
    
    let isPrime = function(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };
    
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primes.push(arr[i]);
        }
    }
    
    return primes;
};

console.log(findPrimes(numbers));

//IIFE


let primeNumbers = (function(arr) {
    let primes = [];
    
    let isPrime = function(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };
    
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primes.push(arr[i]);
        }
    }
    
    return primes;
})(numbers);

console.log(primeNumbers);