 /*
        4. Imagine the String() constructor didn't exist. Create a constructor function,
            MyString(), that acts like String() as closely as possible. You're not allowed to
            use any built-in string methods or properties, and remember that the String()
            doesn't exist. You can use this code to test your constructor
    */

    class MyString {
        constructor(str) {
            let arr = []
            console.log(arr)
            for (var i in str) {
                this[i] = str[i]
                arr.push(str[i])
            }
            this.length = str.length
            this.toString = function () {
                return str
            }
            this.valueOf = function () {
                return str
            }
            this.charAt = (char) => {
                if(arr[char] === undefined){
                    return arr[0]
                }
                return arr[char]
            }
            this.concat = (arg) => {
                return str + arg
            }
            this.slice = (start, end) => {
                var result = [];
                for(var i in arr){
        
                    if( i < end && i >= start ){
                        if(arr[i] !== undefined){
                            result.push(arr[i])
                        }
                    }else if(end <= 0 && (i >= start && i < end+arr.length)){
                        if(arr[i] !== undefined){
                            result.push(arr[i])
                        }
                    }else if( start <= 0 && (i >= start+arr.length && i < end)){
                        if(arr[i] !== undefined){
                            result.push(arr[i])
                        }
                    }
                }

                return result;
                // return arr.slice(start, end)
            }
            this.split = (arg) => {
                var result = [], final=[];

                for(var i in arr){
                    if(arr[i] !== arg){
                        result.push(arr[i])

                    }else{
                        result.push(' ')
                    }
                }
                
                if(result.length === arr.length){
                    console.log('done')
                    let add = '';
                    for(var i in result){
                        if(result[i] !== ' '){
                            add= add+result[i]
                        }else{
                            final.push(add)
                            add = ''
                        }
                        if(i == result.length - 1){
                            final.push(add)
                        }
                    }
                    
                }


                return final;
            }
            this.reverse = () => {
                let ar = []
                for(let i = arr.length - 1; i >= 0; i--){
                    ar.push(arr[i])
                }
                return ar;
            }
        }
    }
    var s = new MyString('hello');

    console.log(s[0])
    console.log(s.toString())
    console.log( s.valueOf())
    console.log( s.charAt(1))
    console.log( s.charAt('2'))
    console.log( s.charAt('e'))
    console.log(s.concat(' world!'))
    console.log( s.slice(1, 3))
    console.log(s.slice(0, -1))
    console.log(s.split('e'))
    console.log(s.split('l'))
    console.log(s.reverse())
        