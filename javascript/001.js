// Project Euler - projecteuler.net
// Problem 1 - 001.js
// Author: fielding johnston - fielding@justfielding.com
//
// Description:
//
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

var count = 0;

for (i = 999; i > 0; i--){
  if(i % 3 === 0 || i % 5 === 0) {
    count += i;
  }
}

console.log(count);