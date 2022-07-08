//  fxn with new 
function Person(name, age){
    this.name=name
    this.age=age
    // return 10    // do no read this
}

let p1 = new Person('harry potter', 12)
console.log(p1)
console.log(p1.name)

let p2 = new Person('hermoine granger', 13)
console.log(JSON.stringify(p2))
console.log('p2 = '+ JSON.stringify(p2))


//  obj inheritance
let a = {p: 10, q: "abhey", r: false}

let b = Object.create(a)
let c= Object.create(b)

console.log(a)
console.log(b)
console.log(b.q)
console.log(c.q)
b.q = "singla"
console.log(b)
console.log(a.q)  // not change
console.log(c.q)  // change

// protochain
console.log(b.__proto__)  
console.log(c.__proto__.__proto__)  

console.log(a.isPrototypeOf(b))
console.log(a.isPrototypeOf(c))

b.__proto__.p++
console.log(a)  // change

let x = 'kumar'
console.log(x.__proto__==String.prototype)

// console.log(typeof x.__proto__.__proto__)

let d = {k: 12}
// console.log(typeof d.__proto__)

console.log(x.__proto__.__proto__== d.__proto__)

console.log(Object.prototype.isPrototypeOf(String.prototype))
console.log(Object.prototype.isPrototypeOf(Number.prototype))


