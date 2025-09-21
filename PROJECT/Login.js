let form=document.querySelector("form")
console.log(form)

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let user=document.getElementById("uemail").value
    let pass=document.getElementById("upass").value

    let getuser=localStorage.getItem("Useremail")
    let getpass=localStorage.getItem("Userpass")

    if (user===getuser  && pass===getpass) {
        console.log({user,pass})
    } else {
        alert("User not exists❌")
    }

    open("./HomePage.html")
})
