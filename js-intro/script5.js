class Person{
    constructor(name, age){
        this.name=name
        this.age=age
    }

    isAdult(){
        return this.age >=18
    }
}

let p= new Person('John Doe',22)

console.log(typeof Person) // function, there is NO new datatype called 'class'
console.log(typeof p)   // object

console.log(p.__proto__== Person.prototype)   //true
console.log(p.__proto__.__proto__== Object.prototype) //true


class Student extends Person{
    constructor(name,age,grade){
        super(name,age)
        this.grade=grade
    }
}

let s1 = new Student('Harry Poter',13,5)
let s2 = new Student('Harmoine Granger',14,6)

console.log(s1.__proto__==Student.prototype)
console.log(s1.__proto__.__proto__== Person.prototype)
console.log(s1.__proto__.__proto__.__proto__ == Object.prototype)
console.log(Student.prototype.__proto__ == Person.prototype)
// inheritance chain
// Object.prototype -> Person.prototype -> Student.prototype
//  no inheritance  b/w the classes ( actually they are functions)

