/*
Longest Word
Have the function LongestWord(sen) take the sen parameter being passed 
and return the longest word in the string. If there are two or more 
words that are the same length, return the first word from the string 
with that length. Ignore punctuation and assume sen will not be empty.
Words may also contain numbers, for example "Hello world123 567"
*/

function LongestWord(sen) { 

    // code goes here

    //split the sen string into an arr 
    // seperating the words inbetween the spaces and loop through the 
    // array. using regex to strip off none alphanumeric characters
    let arr = sen.split(' ').map((item) => item.replace(/[^a-zA-Z0-9]/g, ""))
    //   a shorter regex that eliminates loop
    //   var arr = sen.match(/[a-z]+/gi);

    // b - a sorts the array in decending order and the funtion passed into
    // the sort method compares the elements in the array. 
    arr.sort((a, b) => {
      return b.length - a.length;
    })
    
    //the first element in the arr is our longest word
    return arr[0];
  }
  
  // keep this function call here 
  console.log(LongestWord(readline()));

