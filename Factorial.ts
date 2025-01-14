function Factorial (num: number): number {
	if(num < 2){
  	return num
  }
	
  return num * Factorial(num - 1)
}

console.log( Factorial(3) )
