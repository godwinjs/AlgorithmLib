function findMissingLetter(str: string): string | null {
  for (let i = 0; i < str.length - 1; i++) {
    const currentCharCode = str.charCodeAt(i);
    const nextCharCode = str.charCodeAt(i + 1);

    if (nextCharCode !== currentCharCode + 1) {
      // Return the missing letter
      return String.fromCharCode(currentCharCode + 1);
    }
  }

  // Return null if no missing letter is found
  return null;
}

//SOLUTION 2

function findMissingLetter(str: string): string | null {
  let start = str.charCodeAt(0);
 	
  const missingCharCode = str.split('').map(char => char.charCodeAt(0) ).find((current) => {
    if(current - start > 1){
    	return true // returns 101 when str = 'abce' [97,98,99,101] because it passes the check
      //since 101 - 99 = 2 which is > 1
    }
    start = current
    return false;
  })
  
  console.log(missingCharCode)
  
  return missingCharCode ? String.fromCharCode(missingCharCode - 1) : ''
}

console.log(findMissingLetter('abce'))

// SOLUTION 3

function findMissingLetter(str: string): string | null {
  let start = str.charCodeAt(0);
 	
  const missingCharCode = str.split('').filter((char, idx) => {
  	if (idx === 0) return false;// no character behind the first char so thats not what we looking for/
    const prevChar = str.split('')[ idx - 1 ].charCodeAt(0);
    const currentChar = char.charCodeAt(0)
    
    return currentChar - prevChar > 1
  })[0]
  
  return missingCharCode ? String.fromCharCode(missingCharCode.charCodeAt(0) - 1) : ''
}

console.log(findMissingLetter('abce'))

