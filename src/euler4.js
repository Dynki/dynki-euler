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