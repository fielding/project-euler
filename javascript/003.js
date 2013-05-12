// Project Euler - projecteuler.net
// Problem 3 - 003.js
// Author: fielding johnston - fielding@justfielding.com
//
// Description:
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143?
//
// Notes: We only need to test factors up to the sqrt(n), because any factor above the sqrt(n) will have a smaller corresponding factor. Incase it is a decimal, we can add one and floor it.
// My code is a bit verbose, but I broke it down in to a few steps to make it easier to understand.

var n = 600851475143;                             //  the number we want to solve the for it's prime factorization
var factors = [];                                 //  empty array that we will use to store factors of our number while we test their primality

function factorization(n) {                       //  a function to find the factors of a number up to it's square root (see the notes at the top for explanation of why we only go to the square root)
  var x = Math.floor(Math.sqrt(n) + 1);           //  get the square root, add 1 and then round down to give us a nice even whole number
  for (i = 2; i < x; i++) {                       //  iterate up from 2 to it's square root to determine the factors
    if ( n % i === 0) {                           //  if it divides evenly
      factors.push(i);                            //  push it,or add it, to our factors array
    }
  }
}

function checkArrayForPrimes( array ) {          //  given an array check which items are prime numbers
  for (i = 0; i < array.length; i++) {           //  iterate through the array checking each number
    if(isPrime(array[i]) === false) {            //  if the number is not prime,
      factors.splice(i,1);                       //  then splice it from the array
      i--;                                       //  because we removed an index, what was 6 is now 5, and we must decrement i to avoid skipping a value
    }
  }
}
  
function isPrime(n) {                            //  given a number, check if it is prime
  var sqr = Math.sqrt(n) + 1;                    //  get the square root of a number
  for (m=2; m < sqr; m++) {                      //  iterate up from 2 to the square root of the number
    if ( n % m === 0 ) {                         //  if we find a number that evenly divides n
      return false;                              //  return false
    }
  }
}

factorization(n);
checkArrayForPrimes(factors);
console.log("The prime factors of " + n + " are " + factors);
console.log("The greatest prime factor of " + n + " is " + factors.pop());
