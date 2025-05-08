// setInterval(()=>{
    // const currenTime = new Date(Date.now()) //get current time
//     console.log("me" , Date.now());
// },1000)

const sayDate = function(){
    // console.log("me",Date.now());
    console.log("hello",Date.now());
}
// let intervalId =setInterval(sayDate,1000,"hi") // their is 3rd parameter with setInterval
// clearInterval(intervalId) // runs directly with any event
const text = document.querySelector("#text")
const startBtn = document.querySelector('#start')
const stop = document.querySelector('#stop')
let intervalId;
startBtn.addEventListener('click',()=>{
     if(intervalId) return intervalId
     intervalId = setInterval(sayDate,1000);

})
stop.addEventListener('click',()=>{
    clearInterval(intervalId)
    intervalId= null;
    console.log("stop");
})

// with timer function

// const text = document.querySelector("#text");
// const start = document.querySelector('#start');
// const stop = document.querySelector('#stop');

// let intervalId; // declared in outer scope so both functions can access it

// function sayDate() {
//   text.innerHTML = new Date().toLocaleTimeString();
// }

// start.addEventListener('click', () => {
//   if (intervalId) return; // avoid multiple intervals
//   intervalId = setInterval(sayDate, 1000);
// });

// stop.addEventListener('click', () => {
//   clearInterval(intervalId);
//   intervalId = null;
//   console.log("stop");
// }); 


// })

// const text = document.querySelector("#text");
// const start = document.querySelector('#start');
// const stop = document.querySelector('#stop');
// const text1 = ["hello", "Hi kishan", "what you doing", "hlw"];

// let index = 0;
// let intervalId = null;

// start.addEventListener('click', () => {
//   if (intervalId !== null) return; // prevent multiple intervals

//   intervalId = setInterval(() => {
//     text.innerHTML = text1[index];
//     console.log(text1[index]);
//     index++;

//     if (index >= text1.length) {
//       clearInterval(intervalId);
//       intervalId = null;
//       index = 0; // reset if you want to loop again next time
//     }
//   }, 3000); // 3 seconds
// });

// stop.addEventListener('click', () => {
//   clearInterval(intervalId);
//   intervalId = null;
//   index = 0;
// });