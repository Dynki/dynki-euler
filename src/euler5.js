/**
 * Euler Problem 5
 * 
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

for(let i=1; i<1000000000; i++) {
	if (isDivisible(i)) {
  	return console.log(i);
  }
}

function isDivisible(num) {
  for(let i=1; i<=20; i++){
		if (num%i !== 0)
    	return false;
  }
  
  return true;
}
