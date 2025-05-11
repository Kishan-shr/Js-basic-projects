// fetch('https://example.com').then().catch.finally()  // 
// example 1
// const promiseOne = new Promise((resolve,reject)=>{
//Do an async task
//DB calls, crptography ,network calls 

// setTimeout(()=>{
//     console.log("Aync task completed");
//     resolve() // this helps to connect to .then
// },2000)
// })

// promiseOne.then(()=>{
//     console.log("Promise consumed");
// })
// another method
// new Promise((resolve,reject)=>{
// setTimeout(()=>{
// console.log("Async Task 2");
// resolve() // this help to connect .then 
// },1000)
// }).then(()=>{
//     console.log("Async 2 resolved");
// })
// example 2
// const promiseTwo =  new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     console.log("");
//     resolve({username:"kishan",email:"kishan.shr01@gmail.com"})
// },1000)
// })

// promiseTwo.then((user)=>{
// console.log(user);
// })
// example 3
// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      let error = true
//      if (!error){
//         resolve({username:"prince",password:"123"})
//      }  
//      else {
//         reject('Error: Something went wrong')
//      }
//     },2000)
// })

// promiseThree.then().catch() // .then for resolve and .catch for reject
// promiseThree.then((user)=>{
// console.log(user);
// return user.username
// }).then((username)=>{   // chainnig then to get previous return value for above then
//     console.log(username);
// }).catch((Error)=>{
// console.log(Error);
// }).finally(()=>{
//     console.log("Promise is resloved or Either Reject");
// })

// example 4
const promiseFour = new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:"js", password:"123"})
        } else{
            reject('Error: Js went wrong')
        }
    },1000)
})
//usecase:1 with .then and .catch
// promiseFour.then((user)=>{
// console.log(user.username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Promise is resolves or Reject");
// })

// useCase2: promise with async await without proper handeling error
// async function consumePromiseFour(){
//  const response = await promiseFour
//  console.log(response);
// }
// consumePromiseFour()

// promise with try and catch this works same as .then() and .catch()
async function consumePromiseFour(){
    try{
        const response = await promiseFour
        console.log(response);
    }
    catch(error){
console.log(error);
    }
}
consumePromiseFour()

//apis calling method without try catch
// async function getAllUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users') //some fact previously fetch() was lib now its object
//  console.log(response)   
//  const data = response.json()
//     console.log(data);
// }
// getAllUsers()

// apis calling with try() catch()
// async function getAllUsers() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') //some fact previously fetch() was lib now its object
//     //    console.log(response) 
//          const data = await response.json()
//         console.log(data);
//     } catch(error){
//         console.log("error :", error);
//     }
// }
// getAllUsers()

// write same api call using .then() and .catch()
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
return response.json()
})
.then((data)=>{
console.log(data);
})
.catch((error)=>{
    console.log(error);
})