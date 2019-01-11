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
