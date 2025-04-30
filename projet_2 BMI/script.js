document.addEventListener('DOMContentLoaded',()=>{
    // const height = document.querySelector('#height') //this case will give you empty value
  
    const form = document.querySelector('form')
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const height = parseInt(document.querySelector('#height').value *30.48)
        const weight = parseInt(document.querySelector('#weight').value)
        const display = document.querySelector('#results')
        const weightGuide = document.querySelector('#weight-guide')
       let bim=0;
       console.log(height);
        if(height ==="" || height < 0 || isNaN(height)){
display.innerHTML = "Enter valid height"

}
      else if(weight ==="" || weight < 0 || isNaN(weight)){
display.innerHTML = "Enter valid weight"
}
else{
     bmi = (weight/((height*height) /10000)).toFixed(2);
    display.innerHTML=`<span>${bmi}</span>`

}
if(bmi <= 18.6){
    weightGuide.innerHTML="<p>Under Weight = Less than 18.6</p>"
}
else if(bmi >=18.6 && bmi == 24.9){
    weightGuide.innerHTML="<p>Normal Range = 18.6 and 24.9</p>"
}
else {
    weightGuide.innerHTML="<p>Overweight = Greater than 24.9</p>"
}
    });
    });
