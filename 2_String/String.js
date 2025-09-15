//! How to declare the string 

let str1="hello"

console.log(str1)
console.log(typeof str1)

let str2='HI'

console.log(str2)
console.log(typeof str2)

let str3=`hello everyone`

console.log(str3)
console.log(typeof str3)


//! How to know the length of the String 

console.log(str1.length)

//! Methods of the string

//? 1.toUpperCase()
// This method is used to covert any string into uppercase and
// It will return the one new string and it will not modify the original string 

let sname = 'harish'
let upper = sname.toUpperCase()

console.log(upper)
console.log(sname)

//? 2.toLowerCase()
// This method is used to covert any string into lowercase and 
// It will return the one new string and it will not modify the original string 

let city = 'CHENNAI'
let lower = city.toLowerCase()

console.log(lower)
console.log(city)

//? 3.trim()
// This method is used to remove the spaces from both the sides and 
// It will return the one new string and it will not modify the original string 

let msg="   good morning  "

console.log(msg)
console.log(msg.length)

let msg2=msg.trim()

console.log(msg2)
console.log(msg2.length)

//? 4.indexOf()
// This method is used to return the index of any given character in string 
// It will take the first occurence of the given character

let sub = 'javascript'
console.log(sub.indexOf('a'))     //1

//? 5.lastindexOf()
// This method is used to return the last occurence index of any given character in string

console.log(sub.lastIndexOf('a'))     //3

//? 6.charAt()
// This method is used to return the character at given index from the string

console.log(sub.charAt(5))    // c

//? 7.concat()
// This method is used to combine two or more strings and it will return the new string

let msg3="Sita"
let msg4='Ram'

console.log(msg3.concat(msg4))
console.log(msg3.concat(' ',msg4))

//? 8.includes()
// This method is used to check the given string is present or not if it present returns true if not return false

console.log(msg3.includes('a'))      // sita contains a so output is true
console.log(msg3.includes('A'))      //false
console.log(msg2.includes('good'))   // true

//? 9.replace()
// This method is used to replace one string with another string and it will give the new string ,it will replace the first occurence

let msg5=`Iam from chennai`

console.log(msg5.replace('a' ,'@'))      // I@m from chennai

//? 10.replaceAll()
// This method is used to replace one string with another string and 
// It will give the new string ,it will replace all the occurence

console.log(msg5.replaceAll('a','@'))    // I@m from chenn@i    

//? 11.spilt()
// This method is used to convert any string into array

let str='good afternoon everyone'
console.log(str.split(" "))           // ['good','afternoon','everyone']

console.log(msg4.split(""))           // ['R','a','m']
console.log(msg4.split())           // ['Ram']

//? 12.slice()
// This method is used to extract one string from another string 
// It will take 2 parameters (start index and end index) and 
// It will not include the endIndex value it consider end-1 index value, 
// Here we can also give negative value
// Index values should be traversed/given from left to right

let stri='good afternoon'
console.log(stri.slice(0,4))            // good

console.log(stri.slice(5))             // afternoon

console.log(stri.slice(-4))           // noon

console.log(stri.slice(-4,-1))           // noo

console.log(stri.slice(4,0))           // no output is there

//? 13.substring()
// This method is used to extract one string from another string 
// It will take 2 parameters (start index and end index) and  
// In substring whenever we are giving negative value it will consider as zero
// Here we can  give value from right to left also it can swap the values

console.log(stri.substring(0,4))            // good

console.log(stri.substring(5))             // afternoon

console.log(stri.substring(-4))           // noon

console.log(stri.substring(4,0))           // good  


//! String interpolation

let a=10
let b=30
// the addition of 10 and 30 is 40

console.log(`the addition of ${a} and ${b} is ${a+b}`)