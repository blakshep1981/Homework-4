const quizHeader = document.getElementById('quizHeader')
const nextButton = document.getElementById('next-btn')
const questionContainerElements = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answerButtons')

let shuffledQuestions, currentQuestionsIndex

quizHeader.addEventListener('click', startQuiz)
nextButton, addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})

function startQuiz() {
    quizHeader.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    console.log(shuffledQuestions)
    currentQuestionsIndex = 0;
    questionContainerElements.classList.remove('hide')

    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })

}

function resetState() {
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
            (answerButtonElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
if (shuffledQuestions.length > currentQuestionsIndex + 1){
nextButton.classList.add('hide')

}
else {
    quizHeader.innerText = "Done"
    quizHeader.classList.remove('hide')
}
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            { text: 'string', correct: false },
            { text: 'booleans', correct: false },
            { text: 'alerts', correct: true },
            { text: 'numbers', correct: false }

        ]
    },
    {
        question: 'The condition in an if/else statement is enclosed within _____.',
        answers: [
            { text: 'quotes', correct: false },
            { text: 'curly brackets', correct: true },
            { text: 'parentheses', correct: false },
            { text: 'square brackets', correct: false }
        ]
    },
    {
        question: 'Arrays in JavaScript can be used to store ______.',
        answers: [
            { text: 'numbers and strings', correct: false },
            { text: 'other arrays', correct: false },
            { text: 'booleans', correct: true },
            { text: 'all of the above', correct: false }
        ]
    },
    {
        question: 'String Values must be enclosed within ______ when being assinged to variables.',
        answers: [
            { text: 'commas', correct: false },
            { text: 'curly brackets', correct: false },
            { text: 'quotes', correct: true },
            { text: 'parentheses', correct: false }
        ]
    },
    {
        question: 'A very useful tool used during devloment and debugging for printing content to the debugger is:',
        answers: [
            { text: 'JavaScript', correct: false },
            { text: 'terminal/bash', correct: false },
            { text: 'for loops', correct: false },
            { text: 'console.log', correct: true }
        ]
    }


];

