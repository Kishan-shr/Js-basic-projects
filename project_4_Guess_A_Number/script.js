document.addEventListener('DOMContentLoaded',()=>{

    // const randomNumber = parseInt(Math.random() * 100 + 1)
    let randomNumber = (parseInt(Math.random()*100+1))
   const submitBtn = document.querySelector('#subt')
   const userInput = document.querySelector('#guessField')
   const guessSlot = document.querySelector('.guesses')
   const remaining = document.querySelector('.lastResult')
   const lowOrHi = document.querySelector('.lowOrHi')
   const startOver = document.querySelector('.resultParas')

   const p = document.createElement('p')
   let prevGuess = []
   let numGuess = 1
   let playGame = true

   if(playGame){
    submitBtn.addEventListener('click',(e)=>{
        e.preventDefault()
      const guess = parseInt(userInput.value)
      validateGuess(guess)
    })
   }

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess < 1){
        alert('Please Enter number Greater then 1')
    }
    else if(guess > 100){
        alert('Please Enter number lesser then 100')
    }
    else {
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game over : Random Number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
if ( guess === randomNumber){
    displayMessage(`you gussed it Right`)
    endGame()
}
 else if (guess < randomNumber){
    displayMessage(`Number is Too Low`)
}
 else if (guess > randomNumber){
    displayMessage(`Number is Too High`)
}
}
function displayGuess(guess){
userInput.value = ''
guessSlot.innerHTML += `${guess}, `
numGuess++;
remaining.innerHTML = `${10 - numGuess}`
}
function displayMessage(message){
lowOrHi.innerHTML =`<h2>${message}</h2>`;
}

function endGame(){
userInput.value = ''
userInput.setAttribute(`disabled`,'')
p.classList.add('button')
p.innerHTML = `<h2 id="newGame">Start: new Game </h2>`;
startOver.appendChild(p)
playGame = false
newGame(); 

}

function newGame(){
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click',(e)=>{
    randomNumber = parseInt(Math.random()*100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML =''
    remaining.innerHTML = `${10- numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame=true
})
}


})