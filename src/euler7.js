/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * 
 * What is the 10 001st prime number?
 */

let primes = [];

for (let i=1; primes.length<=10000; i++) {
	if (isPrime(i))
  	primes.push(i);
}

console.log('Largest Prime:', primes[primes.length-1]);

function isPrime(num) {
	for (let i=2; i<num; i++) {
  	if (num % i === 0)
    	return false;
  }
  
  return num !== 1 && num !==0;
}
