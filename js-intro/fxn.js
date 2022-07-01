console.log(beta())

function alpha(){
    return 'A'
}

function beta(){
    return 'B'
}

// no polymorphism
let gammma= function(){
    return 'C'
}

console.log(beta())

function area(height,width){
    if(width==null){   // if(!width)
        return Math.PI*height*height
    }
    return height*width
}

// if we write defination again, it will rewrite
function area(x){
    return x*x
}
console.log(area(3,4))
console.log(area(3))


function hello(){
    console.log("hello "+arguments[0]+arguments[1]+arguments[2])
}

hello("Abhey ","Kumar ","Singla")