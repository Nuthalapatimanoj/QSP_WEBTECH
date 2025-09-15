// ! How to create function

//? 1.Named Function

function display() {
    console.log('Iam display function')
}
display()


//! Function with parameter

function add(a,b) {
    console.log(a+b)
}
add(5,5)
add(5,10)


//! Function with return keyword 

function sub(a,b) {
    return a-b
}
let res = sub(90,40)
console.log(res)


//! Function with Expression 

let msg = function(){
    console.log('hello everyone...')
}
msg();


// 01 - 09 - 2025

//? 2.Arrow Function 

let multiply = (a,b) =>{
    console.log(a*b)
}
multiply(30,3);


//? nested Function
//Function inside the function 

let outer =()=>{
    console.log('iam outer function')
    let inner =()=>{
        console.log('Iam inner function')
    }
    inner()
}
outer();


//? Lexical Scopping 
// In nested function inner function can access all the properties of outer function ,
//but outer function can't acess the properties of inner function, this is called lexical scooping 

let parent = () =>{
    let a=10;

    let child = () =>{
        let b=20;
        console.log(a)
        console.log(b)
    }
    // console.log(b)    error
    child();
}
parent();


//?  Higher Order and Callback function
// Any function that takes another function as a parameter is Higher order function
// The function we are sending as a parameter to the higherorder function is callback function

let hof = (a) =>{
    a()
}

hof(()=>{
    console.log("Higher order function and callback function")
});


//?  IIFE(Immediate Invoke Function Expression)


(function(){
    console.log('Hi,Iam IIFE Function')
})
();