//When buttons are clicked
const startButton = document.querySelector('#startButton')
startButton.addEventListener('click', () => {
    switchToMap()
    timer()
})

const switchToMap = () => {
    startScreen.classList.add('inactive')
    mapScreen.classList.remove('inactive')
    quizScreen1.classList.add('inactive')
    quizScreen2.classList.add('inactive')
    quizScreen3.classList.add('inactive')
    quizScreen4.classList.add('inactive')
    quizScreen5.classList.add('inactive')
    clock.classList.remove('inactive')
    return
}

//PAGES
const mapScreen = document.querySelector(".map")
const startScreen = document.querySelector(".startScreen")
const quizScreen1 = document.querySelector(".quizScreen1")
const quizScreen2 = document.querySelector(".quizScreen2")
const quizScreen3 = document.querySelector(".quizScreen3")
const quizScreen4 = document.querySelector(".quizScreen4")
const quizScreen5 = document.querySelector(".quizScreen5")
const rightAnswer = document.querySelector(".rightAnswer")
const wrongAnswer = document.querySelectorAll(".wrongAnswer")
const clock = document.querySelector('.clock')

//AudioStuff?


//NPC list

const hippo = document.querySelector('#hippo')
const cat = document.querySelector('#cat')
const rocky = document.querySelector('#rocky')
const bear = document.querySelector('#bear')
const pig = document.querySelector('#pig')

let animals = [hippo, cat, rocky, bear, pig]

//behavior after selecting NPC
const switchToQuiz1 = () => {
    startScreen.classList.add('inactive')
    mapScreen.classList.add('inactive')
    quizScreen1.classList.remove('inactive')
    quizScreen2.classList.add('inactive')
    quizScreen3.classList.add('inactive')
    quizScreen4.classList.add('inactive')
    quizScreen5.classList.add('inactive')
    let answersQuiz1 = document.querySelectorAll('.quizScreen1 .playerOptions .answer')
    let rightAnswerMessage1 = document.querySelector('.quizScreen1 .rightAnswer')
    let wrongAnswerMessage1 = document.querySelector('.quizScreen1 .wrongAnswer')
    nextStep(answersQuiz1, rightAnswerMessage1, wrongAnswerMessage1, hippo)
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
    let answerQuiz2 = document.querySelectorAll('.quizScreen2 .playerOptions .answer')
    let rightAnswerMessage2 = document.querySelector('.quizScreen2 .rightAnswer')
    let wrongAnswerMessage2 = document.querySelector('.quizScreen2 .wrongAnswer')
    nextStep(answerQuiz2, rightAnswerMessage2, wrongAnswerMessage2, cat)
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
    let answerQuiz3 = document.querySelectorAll('.quizScreen3 .playerOptions .answer')
    let rightAnswerMessage3 = document.querySelector('.quizScreen3 .rightAnswer')
    let wrongAnswerMessage3 = document.querySelector('.quizScreen3 .wrongAnswer')
    nextStep(answerQuiz3, rightAnswerMessage3, wrongAnswerMessage3, rocky)
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
    let answerQuiz4 = document.querySelectorAll('.quizScreen4 .playerOptions .answer')
    let rightAnswerMessage4 = document.querySelector('.quizScreen4 .rightAnswer')
    let wrongAnswerMessage4 = document.querySelector('.quizScreen4 .wrongAnswer')
    nextStep(answerQuiz4, rightAnswerMessage4, wrongAnswerMessage4, bear)
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
    let answerQuiz5 = document.querySelectorAll('.quizScreen5 .playerOptions .answer')
    let rightAnswerMessage5 = document.querySelector('.quizScreen5 .rightAnswer')
    let wrongAnswerMessage5 = document.querySelector('.quizScreen5 .wrongAnswer')
    nextStep(answerQuiz5, rightAnswerMessage5, wrongAnswerMessage5, pig)
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

//when correct or incorrect answer is picked

const nextStep = (answers, message, wrong, bye) => {
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].classList.contains('correct')) {
            answers[i].addEventListener('click', () => {
                // console.log(answers[i])
                message.classList.remove('inactive')
                wrong.classList.add('inactive')
                for (let i = 0; i < animals.length; i++) {
                    if (animals[i] === bye) {
                        animals.splice(i, 1)
                    }
                }
                setTimeout(() => {
                    switchToMap()
                }, 800)
                bye.remove()
            })
        } else {
            answers[i].addEventListener('click', () => {
                wrong.classList.remove('inactive')
                message.classList.add('inactive')
            })
        }
    }
}

// mixture of google and problem solving

const timer = () => {
    let counter = 20;
    let interval = setInterval(function() {
        document.querySelector('.countTimer').innerHTML = counter
        counter--;
        if (counter === 0) {
            clearInterval(interval)
            Swal.fire({
                title: 'Uh-Oh! You ran out of time!',
                confirmButtonText: 'Try Again!', //got help from @jennster from twitter
            }).then(function() {
                    location.reload();
                }       
            )
        } else if (counter > 0 && animals.length === 0) {
            Swal.fire({
                title: 'Good Job!',
                confirmButtonText: 'Play Again!', //got help from @jennster from twitter
            }).then(function() {
                    location.reload();
                }      
            )
            clearInterval(interval)
        }
    }, 1000)
}
