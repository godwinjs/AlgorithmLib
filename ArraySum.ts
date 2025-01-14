function ArraySum (arr: number[] ): number {

	if(arr.length <= 0){
  	return 0
  }
	
  return arr[0] + ArraySum(arr.splice(1))
}

console.log( ArraySum([1,2,3,4,5]) ) // 15
