function Combination(str: string, r: number): number {
    const Factorial = (num: number): number => num < 2 ? 1 : num * Factorial(num - 1);
      // n!/(n-r)! r! to get the possible numbers of permutations
      let n = str.length, nCr = Factorial(n) / ( Factorial(n-r) * Factorial(r) );
      
    return nCr;
}

Combination('abc', 3) // 1