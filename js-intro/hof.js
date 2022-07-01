 
function createGeeter(greeting){

     function greet(name){
        console.log(greeting,name())
     }
     return greet
    //  return greet()
    //  return greet('Abhey')  
}
function getName(){
    return document.getElementById('namebox').value
}  
let g1=createGeeter('Good Morning')
let g2=createGeeter('Good Evening')

console.log(typeof g1)

console.log(g1('Abhey'))
console.log(g1('Rahul'))