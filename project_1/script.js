document.addEventListener('DOMContentLoaded',()=>{

    const body = document.querySelector('body')
    const btns = document.querySelectorAll('.button')
  btns.forEach(btn=>{
btn.addEventListener('click',(e)=>{
    console.log(e);
    console.log(e.target);
    //if method
    // if(e.target.id === 'grey'){
    //     body.style.backgroundColor = e.target.id
    // }
    // if(e.target.id === 'white'){
    //     body.style.backgroundColor = e.target.id
    // }
    // if(e.target.id === 'blue'){
    //     body.style.backgroundColor = e.target.id
    // }
    // if(e.target.id === 'yellow'){
    //     body.style.backgroundColor = e.target.id
    // }
    switch (e.target.id) {
        case 'grey': body.style.backgroundColor = e.target.id
            break;
        case 'white': body.style.backgroundColor = e.target.id
            break;
        case 'blue': body.style.backgroundColor = e.target.id
            break;
        case 'yellow': body.style.backgroundColor = e.target.id
            break;
    
        default:
            console.log("no match found")
            break;
    }
    
})
});

})