function validatePassword(password: string): boolean {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);

  return password.length >= minLength && hasUpperCase && hasLowerCase && hasDigit;
}

//SOLUTION 2

function validatePassword(password: string): boolean {
  const minLength = 8;
  const hasUpperCase = password.split('').some((char) => char === char.toUpperCase() && char !== char.toLowerCase());
  const hasLowerCase = password.split('').some((char) => char === char.toLowerCase() && char !== char.toUpperCase() );
  const hasDigit = password.split('').some((char) => !isNaN(parseInt(char, 10)) );

  return password.length >= minLength && hasUpperCase && hasLowerCase && hasDigit;
}

console.log(validatePassword('A3hdjndnjjdks'))
console.log(validatePassword('378320942454324r'))
