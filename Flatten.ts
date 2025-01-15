
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

const FlattenRefactor = (arr: any[] ) => {
  let firstItem = arr.shift() //get the first item in the array
  let result: number[] = []
  i++
  

  if(arr.length <= 0){
    return firstItem
  }
  
  if(typeof(firstItem) === 'number'){ // if its not not a sub array run block
    result.push(firstItem)
  }else{
  	// else if its an array, distructure it and add it to the begining of the top array
    for (const item of firstItem ){
        if(Array.isArray(item)){
            arr.unshift(...item)
            return Flatten(arr)
        }else{
            result.push(item)
        }
    }
  }
  
  return result.concat(Flatten(arr))
}

console.log( Flatten([1, [2, 3], [4, [5, 6], 7], 8, [9], 10]) ) // returns [1,2,3,4,5,6,7,8,9,10]

//SOLUTION 2
const Flatten = (arr: any[] ) => {
	let result = [];
  
  for (const item of arr) { //the constrains is handled by the loop
  	if(Array.isArray(item)){
    	result = result.concat(Flatten(item) )
    }else {
    	result.push(item)
    }
  }
  
  return result
}

console.log( Flatten( [1, [2, 3], [4, [5, 6], 7], 8, [9], 10] ) )  // returns [1,2,3,4,5,6,7,8,9,10]
