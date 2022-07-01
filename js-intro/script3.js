let obj1= {
    a:10,
    b:20,
    c:30
}

let obj2 = Object.create(obj1)

obj2.a=15
console.log(obj2)
console.log(obj2.__proto__)  // data

console.log(obj2==obj1) // false
console.log(obj2.__proto__==obj1) // true

let obj3=obj1
console.log(obj3)   // data 
console.log(obj3==obj1) // true
console.log(obj3.__proto__)

obj1.a++
console.log(obj1.a) // updated
console.log(obj2.a) // updated

obj2.a++
console.log(obj1.a) // Not updated
console.log(obj2.a) // updated







console.log(1=='1')  // true  // abstract equality comparison
console.log(1==='1') // false // strict equality comparison

console.log(0=='') // true, because Number('')==0

console.log('false'==false)  // false, because Number('false')=NAN

console.log(''== false) // true, both typecast to 0

console.log('\t'== 0)  // true
console.log('\n'== 0)  //true

console.log('\t'== 'n') // false

// if a=b, b=c this doesn't imply a=c 

console.log([1,2]==[1,2]) // false, array ka data same hai pr array alg hai
// non-premitive datatype like obj, array: have pointer
//  premitive have data

let arr=[1,2]
let arr2=arr

let arr3=[1,2]

console.log(arr==arr2) //true 

console.log(arr3==arr2) //false

