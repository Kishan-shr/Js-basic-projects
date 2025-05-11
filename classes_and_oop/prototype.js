// let myName = "kishan    "
// console.log(myName.trim().length);
// console.log(myName.trueLength);

//creating new method
// let myHeros = ["thor","spider"]
// let heroPower ={
//     thor:"hammer",
//     spider:"sling",
//     getSpiderPower:function(){
//         console.log(`spidy power is ${this.spiderman}`);
//     }
// }
// Object.prototype.kishan = function(){
//     console.log(`kishan is present in all objects`);
// }
// // heroPower.kishan()
// myHeros.hitesh()
// myHeros.heyHitesh()
// //heroPower.heyHitesh()
// //inheritance

// const user={
// name:"chai",
// email:"example.com"
// }

// const Teacher ={
//     makeVideo:true

// }
// const TeachingSupport ={
//     isAvailabel:false
// }
// const TAsupport ={
//     makeAssignment : 'js assignment',
//     fullTime:true,
//     __proto__:TeachingSupport
// }

// Teacher.__proto__ = user

// //modern syntax
// Object.setPrototypeOf(TeachingSupport,Teacher)

//solving problem statement

let anotherUsername = "kishansharma      "
 String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
 }
 anotherUsername.trueLength()
