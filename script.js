//When buttons are clicked
const startButton = document.querySelector('#startButton')
startButton.addEventListener('click', () => {
    switchToMap()
})

const switchToMap = () => {
    startScreen.classList.add('inactive')
    mapScreen.classList.remove('inactive')
    quizScreen1.classList.add('inactive')
    quizScreen2.classList.add('inactive')
    quizScreen3.classList.add('inactive')
    quizScreen4.classList.add('inactive')
    quizScreen5.classList.add('inactive')
    return
}

const mapToggle = document.querySelector("#mapToggle")
mapToggle.addEventListener('click', switchToMap)

const mapScreen = document.querySelector(".map")
const startScreen = document.querySelector(".startScreen")
const quizScreen1 = document.querySelector(".quizScreen1")
const quizScreen2 = document.querySelector(".quizScreen2")
const quizScreen3 = document.querySelector(".quizScreen3")
const quizScreen4 = document.querySelector(".quizScreen4")
const quizScreen5 = document.querySelector(".quizScreen5")

const retry = document.querySelector('#retry')
retry.addEventListener('click', () => {
    location.reload()
})


//AudioStuff?






//NPC list

const hippo = document.querySelector('#hippo')
const cat = document.querySelector('#cat')
const rocky = document.querySelector('#rocky')
const bear = document.querySelector('#bear')
const pig = document.querySelector('#pig')

class NPC {
    constructor(name, question) {
        this.name = name;
        this.question = question;
    }
}

//behavior after selecting NPC
const switchToQuiz1 = () => {
    startScreen.classList.add('inactive')
    mapScreen.classList.add('inactive')
    quizScreen1.classList.remove('inactive')
    quizScreen2.classList.add('inactive')
    quizScreen3.classList.add('inactive')
    quizScreen4.classList.add('inactive')
    quizScreen5.classList.add('inactive')
    return
}

const switchToQuiz2 = () => {
    startScreen.classList.add('inactive')
    mapScreen.classList.add('inactive')
    quizScreen1.classList.add('inactive')
    quizScreen2.classList.remove('inactive')
    quizScreen3.classList.add('inactive')
    quizScreen4.classList.add('inactive')
    quizScreen5.classList.add('inactive')
    return
}

const switchToQuiz3 = () => {
    startScreen.classList.add('inactive')
    mapScreen.classList.add('inactive')
    quizScreen1.classList.add('inactive')
    quizScreen2.classList.add('inactive')
    quizScreen3.classList.remove('inactive')
    quizScreen4.classList.add('inactive')
    quizScreen5.classList.add('inactive')
    return
}

const switchToQuiz4 = () => {
    startScreen.classList.add('inactive')
    mapScreen.classList.add('inactive')
    quizScreen1.classList.add('inactive')
    quizScreen2.classList.add('inactive')
    quizScreen3.classList.add('inactive')
    quizScreen4.classList.remove('inactive')
    quizScreen5.classList.add('inactive')
    return
}

const switchToQuiz5 = () => {
    startScreen.classList.add('inactive')
    mapScreen.classList.add('inactive')
    quizScreen1.classList.add('inactive')
    quizScreen2.classList.add('inactive')
    quizScreen3.classList.add('inactive')
    quizScreen4.classList.add('inactive')
    quizScreen5.classList.remove('inactive')
    return
}

const quiz1Toggle = document.querySelector('#hippo')
quiz1Toggle.addEventListener('click', () => {
    switchToQuiz1()
})

const quiz2Toggle = document.querySelector('#cat')
quiz2Toggle.addEventListener('click', () => {
    switchToQuiz2()
})

const quiz3Toggle = document.querySelector('#rocky')
quiz3Toggle.addEventListener('click', () => {
    switchToQuiz3()
})

const quiz4Toggle = document.querySelector('#bear')
quiz4Toggle.addEventListener('click', () => {
    switchToQuiz4()
})

const quiz5Toggle = document.querySelector('#pig')
quiz5Toggle.addEventListener('click', () => {
    switchToQuiz5()
})



//What it do when good answer go click click

// const correctAnswer = document.getElementById('')
// correctAnswer.addEventListener('click', () => {
//     switchToMap()
// })

