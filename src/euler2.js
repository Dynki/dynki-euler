let fibs = [1,2];

for (let i=2; fibs[i-1] <= 4000000; i++) {
	fibs[i] = fibs[i-2] + fibs[i-1];
} 

console.log(fibs.filter(f => f%2 === 0).reduce((acc, x) => acc + x));
