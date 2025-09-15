//!  DATE : 05 - 09 - 2025 

//! What is JSON
// JSON (Javascript Object Notation) is a lightweight data-interchange format.
// It is easy for humans to read and write,and easy for machines to parse and generate 

//! Advantages of JSON
//? Human-Readable:
// JSON's structure is easy for developers to understand and write.

//? Lightweight:
// JSON is minimal format that reduces the size of the data being transmitted.

//? Language- Independent: 
// JSON can be used with many programming languages,including javascript,python,Ruby,Java e.t.c


let person = {
    personName : 'virat',
    age : 35,
    city : 'bangalore',
    isPlayer : true
}
console.log(person)


//! JSON.stringify()
//  It is used to convert any javascript object into the json (string format). 

let jsonData  = JSON.stringify(person)
console.log(jsonData)
console.log(typeof jsonData)      // String 


//! JSON.parse()
//  It is used to convert any json into javascript object. 

let ob1 = JSON.parse(jsonData)
console.log(ob1)
console.log(typeof ob1)         // Object


//! Array of object 
let employee=[
    {
        eid:1,
        ename:'miller',
        sal:7000
    },
    {
        eid:2,
        ename:'scott',
        sal:5500
    },
    {
        eid:3,
        ename:'king',
        sal:9000
    }
]

employee.map((ele)=>{
    // console.log(ele)        // It print the element one by one 
    console.log(ele.sal)    // It print the sal one by one 
})

let output = employee.map((element)=>{
    // return element
    // return element.eid     // [1, 2, 3]
    // return element.ename   //  ['miller', 'scott', 'king']
    return element.sal   //  [7000, 5500, 9000]
})
console.log(output)      //  [{…}, {…}, {…}]



//! Object Destructure

let student ={
    sname:'rahul',
    age:20,
    isStudent:true,
    skills:['html','css','js']
}

let {sname,age,isStudent,skills}=student;
console.log(sname)              // rahul
console.log(isStudent)          // true  


//! rest parameter
// It is used to store the rest elements/parameters of the function and it return the elements in array. Syntax--> 3 dots(...)

let display =(a,b,...c)=>{
    console.log(a)       // 10 
    console.log(b)       // 20
    console.log(c)       // [30, 40, 50, 60]
}
display(10,20,30,40,50,60)

let arr4=[1,2,3,4,5,6,7,8,9,10]

let [a,b,...c]=arr4
console.log(a)         // 1
console.log(b)         // 2
console.log(c)         // [3, 4, 5, 6, 7, 8, 9, 10]


//! Spread operator 
// This is used to spilt the array,object elements individually and also used for combining 2 arrays instead of concat   

let arr1=[10,20,30]
let arr2=[40,50,60]

let arr3=[...arr1,...arr2]
console.log(arr3)