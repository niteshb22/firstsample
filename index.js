// function fetching(url,callback) {
    
//     setTimeout(() => {
//         const data={name:"nitesh",age:27}
//         callback(data)
//     }, 2000);
// }

// fetching('https://dummyjson.com/products',(data)=>{
//     console.log(data);
    
// })



function fetchData(url){
    return new Promise ((resolve,reject)=>{
    setTimeout(() => {
        const data={name:"nitesh",age:27}
        if(false) reject("ye to error hai")
        resolve(data)
    }, 2000);
})
}

// fetchData('https://dummyjson.com/products').then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
    
// })







async function getData() {
    console.log("fetching data....");
    const data = await fetchData('https://dummyjson.com/products')
    console.log("Data fetched");
}

getData()