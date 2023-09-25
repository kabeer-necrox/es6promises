// var name = 'kabeer'
// function foo(){
//     var name = "necrox"
// }
// foo()
// console.log(name);{



// if (true){
//     var name = "rsk"
// }
// console.log(name)





// async or sync in js 

// setTimeout(()=> {
//     console.log("thhis is number one")
    
// }, 2000);


// setTimeout(() => {
//     console.log("this is the first number")
// }, 1000);
// console.log("number2")
// console.log("number3")



// console.log("number2");
// console.log("number3");
// setTimeout(() => {
//     console.log("this is the first number")
// }, 1000);


// console.log("this is also normal function")

// setTimeout(function(){
//     console.log("this is setTimeout function")

// },5000)

// console.log("this is normal function")








// var name1 ;


// setTimeout(()=>{
//     name1 = "kabeer necrox";

// }, 8000);

// setInterval(()=>{
//     console.log(name1)

// }, 1000)





// ****************promises in javascript*****************************



var Promise = new Promise((resolve ,reject)=>{
    var xinger = "avalible";
    if(xinger === "avalible"){
        resolve("ha Ali na zinger khalaya")
    }
else{
    reject("nahi khalaya")
}

})

Promise.then((data)=>{
    console.log("resolve", data)
})
Promise.catch((error)=>{
    console.log("error", error)

})








































































