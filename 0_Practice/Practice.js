//!  DATE : 03 -09 -2025    TOPIC : Array Higher order methods
// map(), filter(), reduce(), sort(), forEach()

let p1=[30,20,50,10,25,40]
let p2=['html','css','js','sql','java']

let m1=p1.map((ele)=>{
    return ele-10
})
console.log(m1)

let m2=p2.filter((ele)=>{
    return ele!='sql'
})
console.log(m2)

let m3=p1.reduce((acc,ele)=>{
    return acc/ele
})
console.log(m3)

let m4=p1.sort((a,b)=>{
    return a-b
})
console.log(m4)
let m5=p1.sort((a,b)=>{
    return b-a
})
console.log(m5)

let m6=p1.forEach((ele)=>{
    console.log(ele+100) 
})


//!  DATE : 08 -09 -2025    TOPIC : dom

let me1=document.getElementById("Practice")
console.log(me1)

let me2=document.getElementsByClassName("card")
console.log(me2[0])

let me3=document.getElementsByTagName("h1")
console.log(me3)
console.log(me3[0])
console.log(me3[1])

let me4=document.querySelector("p")
console.log(me4)

let me5=document.querySelectorAll("p")
console.log(me5)

me3[1].innerHTML="<p>hello</p>"
me5[0].innerText="Welcome to javascript pratice section"