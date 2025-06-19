// const promise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("asynk is completed")
//         resolve()
//     },1000)
// })

// promise.then(function(){
//     console.log("promise consume");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task2");
//         resolve();

//     },1000)
// }).then(function(){
//     console.log("async task 2 consume");
// })

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"felix",email:"felix_it@gmail.com"})

//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user)
// })

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({username:"felix-its",password:"1234"})
//         }
//         else{
//             reject("error something went wrong")
//         }
//     },2000)

// })
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username

// }).then((username)=>{
//     console.log(username);

// }).catch(function(error){
//     console.log(error)
// })


function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("data fetched successfully");
        },2000);
    });


}
async function getData(){
console.log("fetching data...");
const result=await fetchData();
console.log(result);
}
getData();