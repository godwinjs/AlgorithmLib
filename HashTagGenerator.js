function HashTagGen(string){
  let str = string.trim('');
  
  if(str === ''){
  	return false;
  }
	
 let hashTag = "#" + str.split(' ').map( word => word.split('')[0].toLocaleUpperCase() + word.replace(word.split('')[0], '')  ).join('')
  return hashTag > 140 ? false : hashTag;
}

//SOLUTION 2

function HashTagGen2(string){
	
  let str = string.trim('');
  
  if(str === ''){
  	return false;
  }
  let hashTag = str.split(' ').reduce((tag, word) => {
  	return tag + word.charAt(0).toUpperCase() + word.substring(1) // or slice(1)
  }, '#')
  
  return hashTag > 140 ? false : hashTag;
}

console.log(HashTagGen2('hello world ') )
