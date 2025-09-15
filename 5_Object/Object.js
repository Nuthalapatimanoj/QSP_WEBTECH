// /02 - 09 - 2025

// ! HOw to declare object

let student = {
    sname:'Kumar',
    sid:100,
    isStudent:true,
    skills:['html','css','js'],
    work:()=>{
        console.log('Eat Sleep Repeat' )
    },
    address:{
        city:'chennai',
        state:'Tamilnadu'
    }
}

console.log(student)              // It provide the entire object

// ! How to access object properties

console.log(student.sname)             // kumar
console.log(student.skills[1])         // css
student.work()                         // Eat Sleep Repeat
console.log(student.address)           // {city: 'chennai', state: 'Tamilnadu'}
console.log(student.address.city)      // chennai


let emp = {
    ename:"raj",
    eid:'1002',
    salary:100000.0
}

// ! How to update any property value in object

console.log(emp)           // {ename: 'raj', eid: '1002', salary: 100000}
emp.eid=2001           
console.log(emp)           // {ename: 'raj', eid: 2001, salary: 100000}

// ! How to add any property

emp.phNo=9102837465
console.log(emp)          // {ename: 'raj', eid: 2001, salary: 100000, phNo: 9102837465}

// ! How to delete any property

delete emp.phNo           
console.log(emp)          // {ename: 'raj', eid: 2001, salary: 100000}


// ! Object Methods

//!  1.Object.keys()
// This method is used to return all the keys of the object in the form of array 

let player ={
    pName:'rohit',
    isCaption:true,
    age:35
}

let keys=Object.keys(player)
console.log(keys)              // ['pName', 'isCaption', 'age']


//!  2.Object.values()
// This method is used to return all the values of the object in the form of array 

let values=Object.values(player)
console.log(values)                //  ['rohit', true, 35]


//!  3.Object.entries()
// This method is used to return  an nested array where all the key,values paires of the object are stored in one one array separately 

let key_values=Object.entries(player)
console.log(key_values)                //   [Array(2), Array(2), Array(2)] 0 : ['pName', 'rohit'] 1 : ['isCaption', true] 2 : ['age', 35]


//!  4.Object.freeze()
// This method is used to make an object freeze and whenever the object is frozen we can't add,delete,modify the object

let ob1 = {
    obName:'pen',
    price:20
}

console.log(ob1)     // {obName: 'pen', price: 20}
Object.freeze(ob1)

ob1.price=30         //  we can't modify
delete ob1.price     //  we can't delete
ob1.color='red'      //  we can't add 
console.log(ob1)     // {obName: 'pen', price: 20}


//!  5.Object.isFrozen() 
// This method is used to check whether the object is frozen or not and it return the boolean value

console.log(Object.isFrozen(ob1))     //true
console.log(Object.isFrozen(emp))     //false

// console.log(Object.isSealed(ob2))     //?true


//!  6.Object.seal()
// This method is used to make an object seal it's same like freeze and here also we can't add,delete but we can modify the object

let ob2 = {
    obName:'marker',
    price:50
}

console.log(ob2)     // {obName: 'marker', price: 5marker0}
Object.seal(ob2)

ob2.price=20         //?  we can modify
delete ob2.price     //  we can't delete
ob2.color='red'      //  we can't add 
console.log(ob2)     // {obName: 'marker', price: 20}


//!  7.Object.isSealed() 
// This method is used to check whether the object is sealed or not and it return the boolean value

console.log(Object.isSealed(ob2))     //true
console.log(Object.isSealed(emp))     //false

console.log(Object.isSealed(ob1))     //?true


//!  8.Object.assign() 
//  it is used to combine 2 or more object in one object , we should give empty object at first 

let ob3={
    ename:'salam',
    age:40
}

let ob4={
    city:'chennai',
    state:'Tamilnadu'
}

console.log(ob3)       // {ename: 'salam', age: 40}
console.log(ob4)       // {city: 'chennai', state: 'Tamilnadu'}

let combinedOb = Object.assign({},ob3,ob4)
console.log(combinedOb)        // {ename: 'salam', age: 40, city: 'chennai', state: 'Tamilnadu'}


//!  9.hasOwnProperty() 
// This method is used to check whether in the object, given key property is present or not and it return the boolean value

console.log(ob3.hasOwnProperty("ename"))     //true
console.log(ob4.hasOwnProperty('ename'))     //false
