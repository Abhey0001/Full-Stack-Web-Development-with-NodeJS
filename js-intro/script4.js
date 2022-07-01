let str="Abdjcnsl"                       // 3 levels from NULL
let num = 564                            // 3 levels from NULL
let bool = true                          // 3 levels from NULL
let arr = [773,234,67,364]               // 3 levels from NULL
let obj= {a: 30,b:"lmfssdkm"}            // 2 levels from NULL
let fun= function(){ console.log('yay!')}// 3 levels from NULL


console.log("========= types =========")
console.log('typeof string ', typeof String)
console.log('typeof Boolean ', typeof Boolean)
console.log('typeof Number', typeof Number)
console.log('typeof Array ', typeof Array)
console.log('typeof Object ', typeof Object)
console.log('typeof Function ', typeof Function)

console.log("========= proto chain =========")
console.log(str.__proto__.__proto__== obj.__proto__)
console.log(num.__proto__.__proto__== obj.__proto__)
console.log(bool.__proto__.__proto__== obj.__proto__)
console.log(arr.__proto__.__proto__== obj.__proto__)
console.log(fun.__proto__.__proto__== obj.__proto__)

console.log("========= prototypes =========")
console.log(obj.__proto__== Object.prototype)
console.log(str.__proto__== String.prototype)
console.log(num.__proto__== Number.prototype)
console.log(arr.__proto__== Array.prototype)
console.log(bool.__proto__== Boolean.prototype)
console.log(fun.__proto__== Function.prototype)

// String.prototype inherits from Object.prototype

console.log(typeof Object.create(Boolean.prototype))

let x= Object.create(Boolean.prototype)

console.log(x.__proto__== Boolean.prototype) // true
console.log(x.__proto__== bool.__proto__) // true

let str2="djovjcl"

console.log(str.charAt==str2.charAt)

// do no not work
str.charAt=function(){
    return 'x'
}
// work
String.prototype.charAt=function(){
    return 'y'
}

//  String.prototype contains all default string functions
//  like CharAT, indexof , substring, slice etc

Array.prototype.joinOriginal=Array.prototype.join

Array.prototype.join=function(){
    console.log('join called on', this)
    return this.joinOriginal(...arguments)
}

let arr1 =[834,373,3839,93]

// arr1.join(',')