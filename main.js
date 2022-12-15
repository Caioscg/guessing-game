const guess = document.querySelector("#number")
const guessButton = document.querySelector("button")
const h1 = document.querySelector("h1")
const p = document.querySelector("p")
const guesses = document.querySelector(".guesses")

let attempts = 1
let restart = 0

random = getRandom()
guessButton.addEventListener("click", (e) => {
    e.preventDefault()
    if (restart === 1) {   // click on playAgain button
        reset()
        return
    }

    if(guess.value == "") return  // guessing without picking a number

    if (guess.value == random) {  // correct guess
        if (attempts === 1) {
            h1.innerText = `Acertou em ${attempts} tentativa`   // first attempt
        }
        else {
            h1.innerText = `Acertou em ${attempts} tentativas` // more attempts
        }

        h1.style.fontFamily = 'DM Sans'
        h1.style.fontWeight = "normal"
        h1.style.lineHeight = "150%"

        p.style.display = "none"
        guess.style.display = "none"

        guessButton.innerText = "Jogar novamente"
        guessButton.style.borderRadius = "4px"
        guesses.style.marginTop = "3.3rem"

        restart = 1
    }
    else {  // wrong guess
        guess.value = ""
        attempts++
        
        guess.style.border = "1px solid #FF1010"
        setTimeout(() => {
            guess.style.border = "0"
        }, 700)
    }
})

//* ------ Random number generator ------

function getRandom() {
    return Math.round(Math.random() * 10)
}

//* ------ Play Again button ------

function reset() {
    h1.innerText = "Jogo da Adivinhação"
    h1.style.fontFamily = 'Montserrat'
    h1.style.fontWeight = "600"
    h1.style.lineHeight = "2.4rem"

    p.style.display = "block"
    guess.style.display = "block"
    guess.value = ""
    guess.style.border = "0"

    guessButton.innerText = "Tentar"
    guessButton.style.borderRadius = "0px 4px 4px 0px"

    guesses.style.marginTop = "4.8rem"

    attempts = 1
    restart = 0

    random = getRandom()
}