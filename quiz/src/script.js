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
            displayQuiz(quizContainer, questions);
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

function displayQuiz(container, questions) {
    questions.forEach((question, index) => {
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
                    alert('Correct!');
                    Notification('hello')
                } else {
                    alert('Wrong!');
                }
            });
            questionElement.appendChild(answerElement);
        });

        container.appendChild(questionElement);
    });
}