/*
First Factorial
Have the function FirstFactorial(num) take the num parameter being 
passed and return the factorial of it. For example: if num = 4, then 
your program should return (4 * 3 * 2 * 1) = 24. For the test cases, 
the range will be between 1 and 18 and the input will always be an 
integer.
*/

function FirstFactorial(num) { 
    let factorial = 1;
  
    for(var i = 0; i < num; i++){
      factorial *= i+1;
    }
    // a better loop
    // for (let i = num; i >= 1; i--) {
    //     factorial *= i;
    //   }

    // code goes here  
    return factorial; 
  
  }
     
  // keep this function call here 
  console.log(FirstFactorial(readline()));