
function Permutation(str: string, r: number): number {
    const Factorial = (num: number): number => num < 2 ? 1 : num * Factorial(num - 1);
      // n!/n-r to get the possible numbers of permutations
      let n = str.length, nPr = (Factorial(n))/Factorial(n-r);
      
    return nPr;
}

Permutation('abc', 3) // 6


// only lowercase no 
function Permutations(str: string): string[] {
    let result: string[] = [];

    if(str.length === 0){
        result.push('')
        return result
    }
    
    for (let i = 0; i < str.length; i++ ){
        const char1 = str[i]
      const restChar = str.slice(0, i) + str.slice(i + 1)
      //const restChar = str.slice(i + 1)
      
      console.log(`sub Permutate...${restChar}`)
      const subPerm = Permutations(restChar);
      
      for(let j = 0; j < subPerm.length; j++ ){
          result.push(char1 + subPerm[j])
      }
      
    }
    
    return result
    
  }
  
  console.log(Permutations('abc')) // ["abc", "acb", "bac", "bca", "cab", "cba"]