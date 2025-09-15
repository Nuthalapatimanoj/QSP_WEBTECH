//!  DATE : 11 - 09 - 2025

// async is a  keyword used to convert any function into asyncronouns function. 
// await is a keyword used to make a promise wait until it gets resolved. await is a keyword used only inside async . 
// Inside async fuction we use the try-catch block is used to handle the error . 

let getData = async ()=>{
    try{

        let res = await fetch("https://fakestoreapi.com/products")        // 'await' gives the response 
        console.log(res)                                                  // response

        let data = await res.json()                                       // 'await' gives the data 
        console.log(data)                                                // data
    }
    
    catch(err){
        console.log(err)
    }
}

getData()