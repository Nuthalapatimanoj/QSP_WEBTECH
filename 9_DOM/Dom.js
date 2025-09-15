//! DATE : 08 - 09 - 2025 

// !  1. How to target elements

//?     1.by id
// It is will return particular element 

let logo = document.getElementById("logo")

console.log(logo)


//?     2.by classname
// It is will return HTML collection or an array and to get an particular element we should provide an index

let card = document.getElementsByClassName("card")

console.log(card)

let secondcard = card[1]

console.log(secondcard)

let  btn = document.getElementsByClassName("btn")

console.log(btn[0])


//?     3. by tagname
// It is will return HTML collection or an array and to get an particular element we should provide an index

let list = document.getElementsByTagName("li")

console.log(list[1])


//?     4. by querySelector()
// This method only target the first element irrespective of the parameter (id,class,tagname) 

let logo2 = document.querySelector("#logo")

console.log(logo2)

let card1 = document.querySelector(".card")

console.log(card1)

let li = document.querySelector("li")

console.log(li)


//?      5. by querySelectorAll()
// This method return nodelist same as html collection or array

let c =document.querySelectorAll("li")

console.log(c)



//!   2. How to get / set content inside element

let cards = document.getElementsByClassName("card")

console.log(cards[1].innerText)          // return in normal text format .
console.log(cards[1].innerHTML)          // return in html format that it contains the content with tagname.

cards[1].innerHTML="<h2>Iam from JS file</h2> <p>Hi hello</p>"

list[2].innerText="Contact Us"



//! DATE : 09 - 09 - 2025 

//! How to apply CSS from JS file

let items = document.getElementsByTagName("li")

console.log(items)

let about = items[1]

console.log(about)         

about.style.color="red"
about.style.textDecoration="underline"


//! How to add or remove the class

let firstCard= document.querySelector("div")

console.log(firstCard.classList)      // DOMTokenList ['card', value: 'card']

firstCard.classList.add("dark")

console.log(firstCard.classList)      // DOMTokenList(2) ['card', 'dark', value: 'card dark']


//!  How to create any element

let div=document.createElement("div")

div.classList.add("circle")

cards[2].after(div)

// cards[2].before(div)
// cards[2].append(div)
// cards[2].prepend(div)


//todo  TASK

let footer = document.createElement("footer")            

footer.classList.add("task")

footer.innerHTML="<h1>Welcome to DOM 2025</h1>"

let main=document.querySelector("main")

main.after(footer)