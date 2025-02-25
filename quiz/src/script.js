document.addEventListener('DOMContentLoaded', () => {
    fetch('quiz/quiz.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            const quizContainer = document.getElementById('quiz-container');
            const questions = parseQuiz(data);
            startQuiz(quizContainer, questions);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});

function parseQuiz(data) {
    const questions = [];
    const lines = data.split('\n');
    let currentQuestion = null;

    lines.forEach(line => {
        if (line.trim() === '') {
            if (currentQuestion) {
                questions.push(currentQuestion);
                currentQuestion = null;
            }
        } else if (!currentQuestion) {
            currentQuestion = { title: line, answers: [] };
        } else {
            const isCorrect = line.startsWith('*');
            const answer = isCorrect ? line.substring(1) : line;
            currentQuestion.answers.push({ text: answer, correct: isCorrect });
        }
    });

    if (currentQuestion) {
        questions.push(currentQuestion);
    }

    return questions;
}

function Notify(message) {
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notifications");
    } else if (Notification.permission === "granted") {
        new Notification(message);
    } else if (Notification.permission === "denied") {
        console.log("Notifications are denied by the user.");
    } else {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification(message);
            } else if (permission === "denied") {
                console.log("User denied notifications.");
            }
        });
    }
}

function startQuiz(container, questions) {
    let currentQuestionIndex = 0;
    let correctAnswers = 0;

    function showQuestion() {
        container.innerHTML = '';
        const question = questions[currentQuestionIndex];
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        const titleElement = document.createElement('h2');
        titleElement.textContent = question.title;
        questionElement.appendChild(titleElement);

        question.answers.forEach(answer => {
            const answerElement = document.createElement('button');
            answerElement.textContent = answer.text;
            answerElement.addEventListener('click', () => {
                if (answer.correct) {
                    Notify('Correct!');
                    alert('Correct!');
                    correctAnswers++;
                } else {
                    Notify('Wrong!');
                    alert('Wrong!');
                }
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    showQuestion();
                } else {
                    showResults();
                }
            });
            questionElement.appendChild(answerElement);
        });

        container.appendChild(questionElement);
    }

    function showResults() {
        container.innerHTML = '';
        const resultElement = document.createElement('div');
        resultElement.classList.add('result');
        resultElement.textContent = `You got ${correctAnswers} out of ${questions.length} correct!`;
        container.appendChild(resultElement);
    }

    showQuestion();
}