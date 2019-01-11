/**
 * Euler Problem 4
 * 
 * A palindromic number reads the same both ways. 
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers. 
 */

let product, max = 0;

for (let i=999; i>99; i--) {
	for (let y=999; y>=i; y--) {
		product = i * y;
    if (isPalindrome(product) && product > max) {
      max = product;
    } 
  }
}

console.log(`Largest palindrome is: ${max}`);

function isPalindrome(val) {
	let valStr = val.toString().split('').reverse().join('');
  return valStr == val;
}