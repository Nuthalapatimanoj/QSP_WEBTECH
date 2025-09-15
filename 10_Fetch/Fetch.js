//!  DATE : 11 - 09 - 2025

// Fetch is used to fetch any data from api and whenever we fetch data it returns promise then we need to write .then & .catch block .
// Now it returns the response and we need to convert the data into json format , now returns the promise again then for this again .then & .catch block need to provide to get the original data.

let fdata = fetch("https://fakestoreapi.com/products")

console.log(fdata)              //  Promise

fdata.then((data)=>{
    console.log(data)           // Response

    let jsondata=data.json()
    console.log(jsondata)        // Promise

    jsondata.then((data)=>{
        console.log(data)        // Original data
    })
    .catch((err)=>{
        console.log(err)
    })
})

.catch((err)=>{
    console.log(err)
})


// TASK

let apidata=fetch("https://fakestoreapi.com/products")

console.log(apidata)               // Promise

apidata.then((data)=>{
    console.log(data)              // Response

    let json=data.json()
    console.log(json)              // Promise

    json.then((data)=>{
        let ol=document.querySelector("ol")
        data.map((ele)=>{
            let li = document.createElement("li")
            li.innerText=ele.title          // Print the title
            ol.append(li)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
})

apidata.catch((err)=>{
    console.log(err)
})
