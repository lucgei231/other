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
function Notify(message) {
    // Check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notifications");
    } else if (Notification.permission === "granted") {
        // If the user has granted permission, create a notification
        new Notification(message);
    } else if (Notification.permission === "denied") {
        // If the user has denied permission, don't ask again
        console.log("Notifications are denied by the user.");
    } else {
        // If the user hasn't decided yet, ask for permission
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification(message);
            } else if (permission === "denied") {
                console.log("User denied notifications.");
            }
        });
    }
}

// Example usage

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
                    Notify('Correct!');
                } else {
                    alert('Wrong!');
                    Notify('Wrong!');
                }
            });
            questionElement.appendChild(answerElement);
        });

        container.appendChild(questionElement);
    });
}