function HighestScoringWord(str) {
  let scores = str.split(' ').map( word => word.split('').map( item => (item.charCodeAt(0) - 96) ).reduce( (a,b) => a+b,0) )
  
	return str.split(' ')[scores.indexOf(Math.max(...scores))]
}

console.log(HighestScoringWord('a finding the longest word in volcano'))
