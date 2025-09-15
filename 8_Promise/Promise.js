//! DATE : 06 - 09 - 2025

//! Promise
// Promise is one javascript object,used to handle asynchronised operation

// We can create promise by using 'new' keyword [new Promise()] and it takes one call back function here it takes 2 parameters(resolve,reject)
// For handling the resolve we need .then() block and for reject .catch() block 
// Promise having 3 states <pending> , <fullfilled>(resolve code) , <rejected>(reject code)

let p = new Promise((resolve,reject)=>{

    let studied = false

    if (studied) {
        resolve("I will give mock on 15th Sep.")
    } else {
        reject("I will not give bcoz Iam not prepared")
    }

})

console.log(p)   // Promise {<pending>}  at initial 

p
.then((data)=>{         // Used to handle the resolve block
    console.log(data)   //  I will give mock on 15th Sep. 
})

.catch((error)=>{        // Used to handle the reject block
    console.log(error)    // I will not give bcz Iam not prepared
})

.finally(console.log("Iam a Final block"))  // Iam a Final block. // It will execute at first then resolve or reject block is executed .





let p1= new Promise((resolve,reject)=>{

    let rain=true

    if (rain) {
        resolve("Match will be cancel❌")
    } else {
        reject('Match will be as usual')
    }
})

p1.then((data1)=>{
    console.log(data1)
})

.catch((err)=>{
    console.log(err)
})

.finally(console.log('Match depends on rain'))