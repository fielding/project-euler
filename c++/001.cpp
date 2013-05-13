// Project Euler - projecteuler.net
// Problem 1 - 001.cpp
// Author: fielding johnston - fielding@justfielding.com
//
// Description:
//
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.


#include <iostream>

using namespace std; 

int main( int argc, const char * argv[] )
{ 
  int limit = 1000, sum;

  for ( int i = 1; i < limit; ++i )
    if ( i % 3 == 0 || i % 5 == 0 ) 
      sum += i; 

  cout<<sum<<endl;

  return 0;
}

