/**
 * Euler Problem 3
 * 
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ? 
 */

function largestFactor(num) {
    if (isPrime(num)) {
        return num;
    }

    for (let i = Math.ceil(num / 2); i > 1; i--) {
        if (num % i === 0 && isPrime(i))
        	return i;
	}
}

function isPrime(num) {
	for (let i=2; i<num; i++) {
  	    if (num % i === 0)
		    return false;
    }
  
    return num !==1 && num !==0;
}


console.log('Largest Prime Factor:', largestFactor(13195));