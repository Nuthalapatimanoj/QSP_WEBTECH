//! DATE : 04 - 09 - 2025 

console.log('timing function in js')


let display =()=>{
    console.log('Iam display function')
}
//display()

//! setTimeout()
// It execute the function after the given time 

setTimeout(display,4000)

setTimeout(()=>{
    console.log('Iam setTimeout function')
},5000)


setTimeout(()=>{
    console.log("Happy Birthday🎊🎁")
},6000)


//! setInterval() 
// It excute the function again and again after the time given

let sorry =()=>{
    console.log('soryyyy😓😓😓😓')
}

// setInterval(sorry,1000)


//! clearTimeout() 
// Used to clear the settimeout

let st= setTimeout(() => {
    console.log('Iam setTimeout function')
}, 3000);

clearTimeout(st)


//! clearInterval() 
// Used to clear the setInterval

let si= setInterval(() => {
    console.log('Iam setInterval function')
}, 3000);

clearInterval(si)