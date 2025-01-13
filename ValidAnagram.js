function validAnagram(str, anagram){
	let mapStr = {};
  let mapAnagram = {};
  
	str.split('').map((char, i) => {
  	mapStr[char] = (mapStr[char] || 0) + 1
  })
  anagram.split('').map(char => {
  	mapAnagram[char] = ( mapAnagram[char] || 0 ) + 1
  })
  
  for(let key of Object.keys(mapAnagram)){
  
    if( mapStr[key] !== mapAnagram[key] ){
    	return false
    }
  	
  }
  
  return true 
}

 console.log(validAnagram('llisten', 'sillent') )
console.log(validAnagram('hello', 'world') )
console.log(validAnagram('astronomer', 'moonstarer') )

// OPTION 2: using charCode --- constrants all characters have to be lowercase

function validAnagram(str, anagram){
	return str.split('').reduce( (code, char) =>  code + ( char.charCodeAt(0) - 96 ), 0) === anagram.split('').reduce( (code, char) =>  code + ( char.charCodeAt(0) - 96 ), 0)
}

console.log(validAnagram('llisten', 'sillent') )
console.log(validAnagram('hello', 'world') )
console.log(validAnagram('astronomer', 'moonstarer') )
