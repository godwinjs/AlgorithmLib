function QuestionsMarks(str) { 

    let arr = [], bool = false;
  
    str.split('').map((item, idx) => {
      if(item != '?'){
        arr = []
      }
      if(item == '?'){
        arr.push(item)
        if(arr.join('') == '???'){
          bool = true;
        }
      }
  
    })
  
    // code goes here  
    return bool;
  }
     
  // keep this function call here 
  console.log(QuestionsMarks(readline()));