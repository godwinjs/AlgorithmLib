function Fibonacci (num: number, sequence = [0]): number {
  let last = sequence.length
  
	if(num <= 0){
  	return sequence[last - 1]
  }
  
  if(last === 1 ){
    sequence[last] = 1 + sequence[last - 1]
  }else{
  	sequence[last] = sequence[last - 2] + sequence[last - 1]
  }
  
  return Fibonacci(num - 1, sequence )
}

//console.log( Fibonacci(4) ) // 3
////console.log( Fibonacci(1) ) // 1 -> but will call the function recursively once.

function Fibonacci2 (num: number): number {
	if(num < 2){
  	return num // 0, 1
  }
  
  return Fibonacci2( num - 1 ) + Fibonacci2( num - 2 )
}

console.log( Fibonacci(10) ) // 55

//SOLUTION 3
function Fibonacci3(index: number): number {
  if (index < 0) {
    throw new Error("Index must be a non-negative integer.");
  }
  if (index === 0) return 0;
  if (index === 1) return 1;

  let prev = 0, curr = 1;

  for (let i = 2; i <= index; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

//SOLUTION 4: Using Memoization

function fibonacci(index: number, memo: Record<number, number> = {}): number {
  if (index < 0) {
    throw new Error("Index must be a non-negative integer.");
  }
  if (index === 0) return 0;
  if (index === 1) return 1;

  // Check if the value is already calculated
  if (memo[index]) return memo[index];

  // Calculate and store the result in the memo object
  memo[index] = fibonacci(index - 1, memo) + fibonacci(index - 2, memo);
  return memo[index];
}
