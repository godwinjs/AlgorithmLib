function Power (base: num, exp: number): number {

	if(exp <= 0){//base case
  	return 1
  }
	
  return base * Power(base, exp - 1) // reducing the exponent on each call till you hit the base case, then you multiply the first base var by the results gotten when function is unwinding
}

console.log( Power(2, 3) ) // 8

// SULUTION 2 O(log n) LOGRITHMIC TIME COMPLEXITY: finding the value of a number raised to a number
function PowerPower2 (base: num, exp: number): number {
    // for X^0 return 1
    if(exp === 0) {
        return 1
    }

    /*
        if the exponent is even you can recursively call the function once to 
        find a result for (half the exponent of the base) base^exp/2. 
        and when you multiply the result by itself you get the real Power.
    */
	let halfPower;
    if(exp % 2 === 0) {
        halfPower = Power(base, exp/2)
        return halfPower * halfPower
    }else {
        halfPower = Power(base, (exp-1)/2) // minus base ^ 1 to make it even
        return halfPower * halfPower * base // multiply the result with base ^ 1 you subtracted before.
    }
}
