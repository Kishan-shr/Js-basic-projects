//object literals
// const user = {
//     username:"kishan",
//     loginCount:8,
//     signedIn:true,
//     getUserDetails:function(){
//         // console.log("Got user Details from database");
//         // console.log(`username:${this.username}`); // this keyword refers to current context
//         console.log(this); // this keyword refers to current context
//     }
// }
// console.log(user["username"]); // using [] notation
// console.log(user.username); // using . notation
// console.log(user.getUserDetails());

//constructor functions
//example 

// const promiseOne = new Promise() // here new is constructor function() it helps make new context
// const data = new Date() //

function User(username,loginCount,isLoggedIn){
    // myusername = username  //myusername is same as writing this keyword in node env this refer to empty {}
    this.username = username // this keyword helps to set current context
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }
    return this
}
const userOne = User('kishan',12,true)
const usertwo = User('kishan.s',18,false)
console.log(userOne.constructor);