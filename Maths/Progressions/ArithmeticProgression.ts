console.log('Arithmetic Progression for non-constant common difference')

function NonConstantAPTerm(n: number, differences: number[] ): number {
    const a = differences.shift(); // First term

    if (n === 1) {
      return a; // Return the first term if n = 1
    }
    const sumDifferences = differences.slice(0, n - 1).reduce((sum, d) => sum + d, 0); // Sum up differences up to (n-1)
    return a + sumDifferences;
  }
  const differences = [2, 5, 3, 1, 11, 7, 6, 4]; // Differences
  const n = 8; // Term to calculate
  
  const result = NonConstantAPTerm(N_th, differences);
  console.log(`The ${n}th term is ${result}`);

function NonConstantAllAPTerm(differences) {
    const a = differences.shift()
  const terms = [a]; // Start with the first term
  for (let i = 0; i < differences.length; i++) {
    terms.push(terms[terms.length - 1] + differences[i]); // Add the difference to the last term
  }
  return terms;
}

const allTerms = NonConstantAllAPTerm(differences);
console.log("All terms:", allTerms);
