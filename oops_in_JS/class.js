class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

class Student extends Person{
    constructor(name,age,school){
        console.log("creating student")
        super(name,age)  // it should be written before ths keyword of school
        console.log("yeaa")
        this.school = school
    }
}

let p = new Person('Harry Potter', 16)
let s = new Student('Ron weasley',15,'Hogwarts')

console.log(Person.prototype.isPrototypeOf(p)) // true
console.log(typeof Person)  // fxn

console.log(Student.prototype.isPrototypeOf(s))
console.log(Person.prototype.isPrototypeOf(s))

console.log(p)
console.log(s)

