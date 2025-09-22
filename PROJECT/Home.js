let username=localStorage.getItem("Username")

let nav=document.querySelector("nav")
nav.innerHTML=`<input type="text" id="search" placeholder="enter the product to search"/> <h2>${username}</h2> <button>logout</button>`

let getData = async ()=>{
    try {
        let res= await fetch("https://fakestoreapi.com/products")
        console.log(res)

        let data=await res.json()
        console.log(data)

        data.map((e)=>{
            let div=document.createElement("div")
            div.classList.add("card")
            div.innerHTML=`<img src="${e.image}" <h3>${e.title}</h3> <h3>Price : ${e.price}</h3> <h3>Rating : ${e.rating.rate}</h3>`
            let main=document.querySelector("main")
            main.append(div)
        })
    } catch (error) {
        console.log(error)
    }
}
getData()