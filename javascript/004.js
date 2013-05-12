// Project Euler - projecteuler.net
// Problem 4 - 004.js
// Author: fielding johnston - fielding@justfielding.com
//
// Description: A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(n) {
  s = n.toString();                                     // get n as string; get length of n as string; divide length by 2; floor this, because if
  l = Math.floor(s.length / 2);                         // the number is an uneven amount of characters long, then the middle number will always be equal
                                                        // to itself. Therefor if half is 2.5, we only need to check 2 characters from the front and from the back.
  
  for (i = 0; i <= l; i++) {                            // check the characters starting from the front and back to make sure they are equal.
    if (s.charAt(i) !== s.charAt(s.length - 1 - i)) {   // compare each number start and end, start + 1 and end -1, etc;
      return false;                                     // if they are not equal, return from the function with false, because it is not a palindrome
    }
  }
  return true;                                          // if it hasn't returned false, then all character checks passed. return true
}

var largestPalindrome = 0;

for (x = 999; x > 0; x--) {
  for(y = 999; y > 0; y--) {
    var p = x * y;
    if (isPalindrome(p)) {
      if (p > largestPalindrome) {
        largestPalindrome = p;
      }
    }
  }
}

console.log("The largest palindrome is " + largestPalindrome);
