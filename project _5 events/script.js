document.addEventListener('DOMContentLoaded',()=>{
// first approach less features using onclick
    // document.getElementById('owl').onclick= ()=>{
    //     alert('me')
    // }
    // notes 1
    // listing few event listner
    // attachEvent() used at time of interexplorer
    // jqQuery() - on event
    // 
    //notes 2
    // addEventListener has three argument .addEventlistener('event',callback,false) 3rd arugment is false by default
      //for interviews
    //should types of event in js
    //time , timestamp , defaultPrevented() ,target , toElement srcElement
    //clientX , clientY, screenX , screenY ,offset
    // keys altkey ,ctrlkey ,shiftkey, keyCode

    //event propagation has two context one eventBublling , event capturing
//eventbubling example1 note eventbubling happens from bottom to top
    // document.getElementById('images').addEventListener('click',()=>{
    // console.log("clicked unordered list");
    // },false)
    // document.getElementById('owl').addEventListener('click',()=>{
    // console.log("owl clicked");
    // },false)

//eventcapturing example1 note eventcapturing happens from top to bottom
    // document.getElementById('images').addEventListener('click',()=>{
    // console.log("clicked unordered list");
    // },true)
    // document.getElementById('owl').addEventListener('click',()=>{
    // console.log("owl clicked");
    // },true)
    
    //stop propagation
//     document.getElementById('images').addEventListener('click',(e)=>{
//    e.stopPropagation()
//         console.log("clicked unordered list");
//     },false)
//     document.getElementById('owl').addEventListener('click',(e)=>{
//    e.stopPropagation()
//         console.log("owl clicked");
//     },false)
  //preventDefault
//   document.getElementById('google').addEventListener('click',(e)=>{
// e.preventDefault()
// e.stopPropagation()
// console.log("google clicked");
//   },false)

//project logic starts from here
document.querySelector('#images').addEventListener('click',(e)=>{
    // console.log(e.target.parentNode);
    //1st approach if we click on list instead of element it removes entire ul 
    // let removeIt = e.target.parentNode
    // removeIt.remove()  if we click on list instead of element it removes entire ul 
    //2nd approach
    // removeIt.parentNode.removeChild(removeIt)
    //to overcome then issue we have use strict check
    console.log(e.target.tagName);
    if(e.target.tagName=== 'IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
})

})