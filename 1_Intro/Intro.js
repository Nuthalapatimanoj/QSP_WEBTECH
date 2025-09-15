console.log("Iam External javascript");

//! How to declare variable 
//? 1.let 2.var 3.const

//! 1.let
let sname="sathish";
console.log(sname)

// let sname --> Re-declaration is not possible in 'let' keyword

//! 2.var
var age 
age=30
console.log(age)

var age =40
console.log(age)

// Re-declaration is possible in 'var' keyword

//! 3.const 
const aadharNo=123456789012
console.log(aadharNo)

// aadharNo=9999999999999
// console.log(aadharNo)        ----->  we can't re-itialise & re-declare the 'const' keyword

// const pi
// pi=3.14    ------------> In const keyword declaration and intitilasation should be in single line  


//! Datatypes in js
//? 1.primitive 2.non-primitive

// ! 1.PRIMITIVE
//! 1.number

let phNO=9876543210
console.log(phNO)
console.log(typeof phNO)

let salary=20000.50
console.log(salary)
console.log(typeof salary)

//todo }==> how to know the datatype => using type of operator

//! 2.boolean

let isMarried=true
console.log(isMarried)
console.log(typeof isMarried)

let hasKid=false
console.log(hasKid)
console.log(typeof hasKid)

//! 3.string

let city="chennai"
let state='tamilnadu'
let country=`India`

console.log(city)
console.log(state)
console.log(country)

console.log(typeof city)
console.log(typeof state)
console.log(typeof country)

//! 4.Undefined

// Any variable is declared but not initialized is called undefined

let wifeName
console.log(wifeName)
console.log(typeof wifeName)

//! 5. null

let hasGf=null
console.log(hasGf)
console.log(typeof hasGf) // object

//! 6.bigint
 
let largeNo=2n
console.log(largeNo)
console.log(typeof largeNo)


//! 2.NON_PRIMITIVE
// ? array,function,object 

//! 1.array 

let arr=[20,"html",true,undefined]
console.log(arr)

//! 2.function 

function add() {
    console.log('Iam add function')
}

add()

//! 3.object 

let emp = {
    ename:'miller',
    eid:1001
}
console.log(emp)
console.log(emp.ename)


//! DATE : 06 - 09 - 2025

// Variable hosting is possible in var keyword becoz whenever we declare var keyword it comes to top 

console.log(sname1)        // undefined

var sname1 = 'manoj'
console.log(sname1)        // manoj

console.log(color)        //error --> color can't access before initialisation

let color='red'
console.log(color)        // red

// var is keyword is global scope whereas let and const keywords are local scope
{
    var a=10
    let b=20
    const c=30
    console.log(a,b,c)
}
console.log(a)
console.log(b)   // error
console.log(c)   // error