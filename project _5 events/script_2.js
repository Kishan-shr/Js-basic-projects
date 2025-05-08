

//setTimeout()
// setTimeout(()=>{
//     console.log("kishan");
// },2000)

//example on passing function reference
 const kishan = function (){
    console.log("kishan");
 }
 setTimeout(kishan(),2000) // excuting the function 
 setTimeout(kishan,2000) // passing  the reference
 const kishan_1 = function(){
     const text = document.querySelector('#text')
     text.innerHTML = 'me'
 }
// setTimeout(kishan_1(),2000) // this passing function while execute it immediately
// setTimeout(kishan_1,2000) // here were not passing function its function reference

//clear time out
const stop = setTimeout(kishan_1,5000)
// clearTimeout(stop) directly stop the event to happen
// eventlistener to button 
document.querySelector('#stop').addEventListener('click', ()=>{
    clearTimeout(stop)
    console.log("stoped");
})

//setInterval()
