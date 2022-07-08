// prototypeof fxns

function Person(name, age){
    this.name=name
    this.age=age
    // this.isAdult=function(){ return this.age >= 18}
    // this fxn will be present in every object so then their will be memory problem
}

Person.prototype.isAdult = function(){return this.age>=18}

let p1 = new Person('harry potter', 15)
let p2 = new Person('hermoine granger', 30)

console.log(p1.isAdult())
console.log(p2.isAdult())
console.log(p1.isAdult==p2.isAdult)
console.log(p1.isAdult()==p2.isAdult())

console.log(Person.prototype.isPrototypeOf(p1))
console.log(Person.prototype.isPrototypeOf(p2))