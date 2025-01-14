const NumberRange = (start: number, end: number ) => {
	if(start === end){
  	return end // if you don't use the concat method you have to return [end] to suit your solution
  }
  
  return [ start ].concat(NumberRange(start + 1, end))
} //CONCAT

console.log( NumberRange(1, 10) ) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// UNWINDING in Recursion

const NumberRange = (start: number, end: number ) => {
	if(start === end){
  	return [end]
  }
	//For Understanding
  // const numbers = []
  // numbers.push(end)
  // return NumberRange(start, end - 1).concat(numbers)
	
  const numbers = NumberRange(start, end - 1)
  numbers.push(end)
  return numbers
}

console.log( NumberRange(1, 10) )
