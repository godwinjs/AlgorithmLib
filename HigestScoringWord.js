function HighestScoringWord(str) {
  let scores = str.split(' ').map(word => word.split('').reduce((a,b) => a + (b.charCodeAt(0) - 96) ,0) )
  
	return str.split(' ')[scores.indexOf(Math.max(...scores))]
}

console.log(HighestScoringWord('a finding the longest word in volcano'))
