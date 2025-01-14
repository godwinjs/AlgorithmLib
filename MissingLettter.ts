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

