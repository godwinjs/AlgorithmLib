function reverseStr(str: string, count= str.length - 1): string {
	if(count < 0 ){
  	return ''
  }
  
  return str.charAt(count) + reverseStr(str, count - 1)
}

//USING recurssion UNWINDING'

function reverseStr2(str: string ): string {
	if(str === 0 ){
  	return ''
  }
  
  return reverseStr2(str.substring(1)) + str.charAt(0)
}
// SHORTER
const reverseStr2(str: string ): string => str === 0 ? '' : reverseStr2(str.substring(1)) + ste.charAt(0)

console.log(reverseStr2('hello'))
