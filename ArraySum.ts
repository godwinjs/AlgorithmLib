function ArraySum (arr: number[] ): number {

	if(arr.length <= 0){
  	return 0
  }
	
  return arr[0] + ArraySum(arr.splice(1)) // SPLICE
}

const ArraySum = (arr: number[] ) => arr.length <= 0 ?  0 : arr[0] + ArraySum(arr.slice(1) ) //SLICE
console.log( ArraySum([1,2,3,4,5]) ) // 15
