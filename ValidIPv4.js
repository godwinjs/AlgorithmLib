function isIPv4Valid(string){
	let octets = string.split('.');
  if(octets.length !== 4){
  	return false
  }
  
  return octets.every((octet) => +octet <= 255 && +octet >= 0)
}

console.log(isIPv4Valid('112.164.23.348'))
