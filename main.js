const guess = document.querySelector("#number")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const h1 = document.querySelector("h1")
const h2 = document.querySelector("h2")
const p = document.querySelector("p")
const guesses = document.querySelector("form")

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

let attempts = 1

random = getRandom()

//* ------ events ------ *//

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})

//* ------ functions ------ *//

function getRandom() {
    return Math.round(Math.random() * 10)
}

function handleTryClick(e) {
    e.preventDefault()

    if(guess.value == "") return  // guessing without picking a number

    if (guess.value == random) {  // correct guess
        toggleScreen()

        if (attempts === 1) {
            h2.innerText = `Acertou em ${attempts} tentativa`   // first attempt
        }
        else {
            h2.innerText = `Acertou em ${attempts} tentativas` // more attempts
        }

    }
    else {  // wrong guess
        guess.value = ""
        attempts++
        
        guess.style.border = "1px solid #FF1010"
        setTimeout(() => {
            guess.style.border = "0"
        }, 700)
    }
}

function handleResetClick() {
    toggleScreen()
    attempts = 1
    random = getRandom()
    guess.value = ""
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}