/*
6. Imagine that Array()and the array literal notation don't exist. Create a
constructor called MyArray() that behaves as close to Array() as possible. Test
it with the following code:
*/

class MyArray {
    constructor(...args) {
        
        this.length = args.length;

        this.toString = () => {
            let str = ''
            for(var i in args){
                str+= args[i] + `${(i < args.length - 1) ? ',':''}`
            }
            return str
            // return Object.prototype.toString.call(arr);
        }
        this.push = (arg) => {
            args[args.length] = arg;
            return args;
        }
        this.pop = () => {
            args.length = args.length - 1
        }
        this.join = (arg) => {
            let str = ''
            for(var i in args){
                str+= args[i] + `${(i < args.length - 1) ? arg:''}`
            }
            return str
        }

        return args;
    }
}

var z = new Array(1, 2, 3, "test");

console.log(z)
console.log(z.toString())
console.log(z.length)
console.log(z[z.length - 1])
console.log(z.push('poo'))
console.log(z.pop())
console.log(z.toString())
console.log(z.join(','))
console.log(z.join(" isn't "))