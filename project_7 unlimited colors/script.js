//generator a random color
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
       color += hex[Math.floor(Math.random()*16)]
   
    }
    return color
}
let invertvalId;
// console.log(randomColor())
const startChangingColor = function(){
    //first method
//   invertvalId = setInterval(()=>{
//       document.body.style.background = `${randomColor()}`
//       console.log(randomColor());
//     },2000)
if(!invertvalId){
    invertvalId =setInterval(bgChanger,2000)
}
    function bgChanger(){
 document.body.style.background = randomColor()
 console.log(randomColor());
    }
}
const stopChangingColor = function(){
    clearInterval(invertvalId)
    invertvalId = null;
    console.log("stoped");
}
document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)