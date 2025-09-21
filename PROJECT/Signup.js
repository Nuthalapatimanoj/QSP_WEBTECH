let form=document.querySelector("form")
console.log(form)

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let pass=document.getElementById("pass").value
    // let cpass=document.getElementById("cpass").value

    // if (pass===cpass) {
    //     console.log({name,email,pass})
    // } else {
    //     alert("Confirm password should be matched")
    // }

    console.log(`Name : ${name} Email :  ${email} Password : ${pass}`)

    localStorage.setItem("Username",name)
    localStorage.setItem("Useremail",email)
    localStorage.setItem("Userpass",pass)

    open("./LoginPage.html")          //! Used to navigate login page on submitting the form
})


















//! LOCAL STORAGE

localStorage.setItem("actorName","manoj")   //used to add elements

console.log(localStorage.getItem("actorName"))  //used to get data from local storage

console.log(localStorage.removeItem("actorName"))   // Used to remove data from local storage