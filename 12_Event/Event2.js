//! DATE : 13 - 09 - 2025

let btn=document.querySelector(".btn")

btn.addEventListener("click",()=>{
    alert("Iam Event Listener")
})


let header=document.querySelector("header")

header.addEventListener("mouseover",()=>{
    header.style.backgroundColor="black"
    header.style.color="white"
})

header.addEventListener("mouseleave",()=>{
    header.style.backgroundColor="aqua"
    header.style.color="black"
})

// Differring event handler and listener

let a1 =() =>{
    console.log("iam a1 function")
}

let a2 =() =>{
    console.log("iam a2 function")
}

let btn3=document.querySelector(".btn3")

btn3.addEventListener("click",()=>{
    console.log("Iam Click event")
})

// btn3.addEventListener("click",()=>{
//     console.log("Iam Click event 2")
// })


btn3.addEventListener("click",(e)=>{
    console.log("Iam Click event 2")
    console.log(e)
    console.log(e.target)
    console.log(e.type)
})



//! Keyboard events

let input=document.querySelector("#inp")

input.addEventListener("keydown",()=>{
    // console.log("Iam key pressed")
})

input.addEventListener("keyup",(e)=>{
    console.log("Iam key removed")
    // console.log(e.target.value)

    let output=document.querySelector(".output")

    output.innerHTML=`<h2>${e.target.value}</h2>`
})