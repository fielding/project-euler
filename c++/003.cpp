// Project Euler - projecteuler.net
// Problem 3 - 003.cpp
// Author: fielding johnston - fielding@justfielding.com
//
// Description:
//
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?
//
// Notes: We know that the largest factor is the square root of our limit. This helps cut down the amount of primes we have to find.

#include <iostream>
#include <vector>
#include <cmath>

using namespace std;

vector< long int > eratosthenesSieve ( long int n );



int main( int argc, const char * argv[] ) { 
  long int limit = 600851475143;
  float divisorLimit = sqrt( limit );

  vector< long int > primes;
  primes = eratosthenesSieve( divisorLimit );

  int k = (int)divisorLimit;
  long int largest = 0;

  while ( largest == 0 && k >= 0 ) {
    if ( primes[k] == true )
      if ( limit % k == 0 )
        largest = k;
    --k;
  }

  cout<<largest<<endl;

  return 0;
}


vector< long int > eratosthenesSieve ( long int n ) {
  vector< long int > primes;
  primes.assign( n, true );

  primes[0] = false;
  primes[1] = false;

  long int m = sqrt ( n );

  for ( int i = 2; i <= m; ++i ) {
    if ( primes[i] == true )
      for (int j = i*i; j <= n; j += i ) {
        primes[j] = false;
      }
  }

  return primes;
}