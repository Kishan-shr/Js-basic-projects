// // function init() {
// //   var name = "Mozilla"; // name is a local variable created by init
// //   function displayName() {
// //     displayName()    //is the inner function, that forms a closure
// //     console.log(name); // use variable declared in the parent function
// //   }
// //   displayName();
// // }
// // init();

// //examples of lexical scope

// function outer(){
//     let username = "hitesh"
//      console.log("secret",secret); // the parent can't acess child variables 

// function inner(){
//     let secret = "1234"
//     console.log(username);
// }
// inner()
// function innerTwo(){
//     console.log("innerTwo",username);
//     console.log("secret",secret); // the inner never to another inner function only parent variables and const can be share
// }
// innerTwo()
// }
// outer()
// console.log("Too OUTER",username);

//example of closures

// function makeFunc() {
// const name = "Mozilla";
// function displayName() {
// console.log(name);
// }
// return displayName;
// }
// const myFunc = makeFunc();
// myFunc();

//example 2 this example is not optimise way do this 
// document.querySelector('#orange').onclick= function(){
//     document.body.style.background="orange"
// }
// document.querySelector('#green').onclick= function(){
//     document.body.style.background="green"
// }
//optimize to handel
function clickHandler(color){
// document.body.style.backgroundColor = `${color}`
return function(){
    document.body.style.backgroundColor = `${color}`  //sends entire lexical scope not function()
}
}

document.querySelector('#orange').onclick = clickHandler("orange")
document.querySelector('#green').onclick = clickHandler("green")