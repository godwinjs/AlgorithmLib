function Power (base: num, exp: number): number {

	if(exp <= 0){
  	return 1
  }
	
  return base * Power(base, exp - 1)
}

console.log( Power(2, 3) ) // 8
