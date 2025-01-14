
// SOLUTION WITH UNWINDING

const Flatten = (arr: any[] ) => {
  let firstItem = arr.shift() //get the first item in the array

  if(arr.length <= 0){
    return firstItem
  }
  
  if(typeof(firstItem) === 'number'){ // if its not not a sub array run block
    return [ firstItem ].concat(Flatten(arr))
  }else{
  	// else if its an array, distructure it and add it to the begining of the top array
    if(firstItem) arr.unshift(...firstItem)
  }
  
  return Flatten(arr);
}

console.log( Flaten([1, [2, 3], [4, [5, 6], 7], 8, [9], 10]) ) // returns [1,2,3,4,5,6,7,8,9,10]
