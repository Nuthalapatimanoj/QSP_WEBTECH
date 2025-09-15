// 01 - 09 - 2025

let arr = [10,'html',true,[1,3]]
console.log(arr)

//! How to know the length of the array

console.log(arr.length)


//!  1.push()
// It is used to add elements at the end of the array and it returns the size of the modified array

let arr1=[10,20,30]
console.log(arr1)

arr1.push(40)
console.log(arr1)


//!  2.pop()
// It is used to remove the last element of the array and it returns the removed element from the array

let arr2=[10,20,30,40]
console.log(arr1)

arr1.pop()
console.log(arr1)


//!  3.unshift()
// This  method is used to add the element at the starting of the array and it returns the size of the modified array

let arr3=[10,20,30,40]
console.log(arr3)

arr3.unshift(0)
console.log(arr3)


//!  4.shift()
// This  method is used to remove the element from the starting of the array and it returns the removed element from the array

let arr4=[10,20,30,40]
console.log(arr4)

arr4.shift()
console.log(arr4)


//!  5.includes()
// This method is used to know the given element is present in array or not it return the boolean value 

let arr5=[10,20,40,20]
console.log(arr5.includes(30))
console.log(arr5.includes(40))


//!  6.indexOf() 

console.log(arr5.indexOf(20))


//!  7.lastIndexOf() 

console.log(arr5.lastIndexOf(30))
console.log(arr5.lastIndexOf(20))


//!  8.concat() 
// It is used to combine 2 or more than 2 arrays

let sub=['html','css']
let sub1=['jS']
console.log(sub.concat(sub1))


//! 9.reverse()
// It is used to reverse the array

console.log(arr5.reverse())
console.log(sub.reverse())


//!  10.join()
// This method is used to convert an array into a string

let msg = ['h','e','l','l','o']
console.log(msg.join(""))


//! reverse the string by inbuilt method

let str='hello'
let arra=str.split("")
console.log(arra)
let revStr=arra.reverse()
console.log(revStr)
console.log(revStr.join(""))


//! DATE: 03 - 09 - 2025

//!  Higher Order methods

//!  1.map()
// It is one higher order array method and it is used to traverse the array ,
// also we can do any operations with all the elements.
// map() will take one call back function and here it can take 3 parameters element,index,array. 
// This method will return one new array .

let m= arr2.map((element,index,array)=>{
    return element+100
})
console.log(m)           //  [110, 120, 130, 140]


let subject = ['html','css','js','java','sql']

let s=subject.map((ele)=>{
    return ele.toUpperCase()
})
console.log(s)           //  ['HTML', 'CSS', 'JS', 'JAVA', 'SQL']


//!  2.filter()
// It is one higher order array method and it is used to traverse the array and it will check the condition, 
// it will return one new array.
// filter() will take one call back function and here it can take 3 parameters (element,index,array). 
 
let f = arr2.filter((ele)=>{
    return ele>20
})
console.log(f)           //  [30, 40]

let s1=subject.filter((ele,index)=>{
    return ele!='js'&& index!=1
})
console.log(s1)         // ['html', 'java', 'sql']


//!  3.reduce()
// It is one higher order array method and it is used to reduce the array elements into single output by addition,multiply operations.
// It will take one call back function ,here it takes 4 parameters (accumulator,element,index,array)

let sum=arr3.reduce((acc,ele)=>{
    console.log(acc)       //100 ==> by default accumulator it will take the array first element
    return acc+ele
})
console.log(sum)         //100

let r2=msg.reduce((acc,ele)=>{
    return acc+ele
})
console.log(r2)           // hello

let multiply=arr3.reduce((acc,ele)=>{
    return acc*ele
},0)    // accumulator value can be change by giving the value inside the method after the call back function by separating with comm (,)       
console.log(multiply)      // 0 


//!   4.sort()
// sort() method is one higher order method, it is used to sort the array elements and inside call back function it takes 2 parameter.
// If we do first parameter minus(-) second parameter it will give asscending order and vice versa for desending order

let ar1=[1,3,2,6,0,8,7]

let asc=ar1.sort((a,b)=>{
    return a-b
})
console.log(asc)           // [0, 1, 2, 3, 6, 7, 8]

let dsc=ar1.sort((a,b)=>{
    return b-a
})
console.log(dsc)          // [8, 7, 6, 3, 2, 1, 0]


//!  5.forEach()
//  Same as map method but foreach can't return.

let ar2=[3,2,5,6,8]

ar2.forEach((ele)=>{
    console.log(ele+100)    
})


//! DATE : 06 - 09 - 2025

//! 11.slice( ) 
// It is used to extract the array from the original array .It will take 2 parameters(start index,end index)
// And it returns the extracted new array

let ar3=[10,30,50,70,90]

console.log(ar3.slice(2,5))     // [50, 70, 90]
console.log(ar3.slice(2))      // [50, 70, 90]


//! 12.splice()
// This method is used to extract a array from the original array .it will take 2 parameters(start index, delete count )
// It will return the extracted array and also it modifys the original array.
// for e.g. --> let a=children if we extract clg(a.splice(-3,3))--> it will return //?child
// and also modifys the original array to //?child  

let ar4=['q','s','p','i','d','e','r','s']

console.log(ar4.splice(0,1))           // ['q']

console.log(ar4)            // ['s', 'p', 'i', 'd', 'e', 'r', 's']

console.log(ar4.splice(-1,1))  // ['s']

console.log(ar4)      // ['s', 'p', 'i', 'd', 'e', 'r']