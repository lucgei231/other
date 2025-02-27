// When the DOM content is fully loaded, execute the following code
document.addEventListener('DOMContentLoaded', () => {
    // Fetch the quiz data from a text file located in the 'quiz' folder
    fetch('quiz/quiz.txt')
        .then(response => {
            // Check if the network response is ok (status code 200-299)
            if (!response.ok) {
                // Throw an error if the response is not ok
                throw new Error('Network response was not ok ' + response.statusText);
            }
            // Convert the response to text
            return response.text();
        })
        .then(data => {
            // Get the quiz container element by its ID
            const quizContainer = document.getElementById('quiz-container');
            // Parse the quiz data into an array of question objects
            const questions = parseQuiz(data);
            // Start the quiz by calling the startQuiz function
            startQuiz(quizContainer, questions);
        })
        .catch(error => {
            // Log any errors that occur during the fetch operation to the console
            console.error('There has been a problem with your fetch operation:', error);
        });
});

// Function to parse the quiz data from text format to an array of question objects
function parseQuiz(data) {
    const questions = [];
    // Split the data into individual lines
    const lines = data.split('\n');
    let currentQuestion = null;

    lines.forEach(line => {
        // Check if the line is empty (indicates end of a question block)
        if (line.trim() === '') {
            if (currentQuestion) {
                // Add the current question to the array of questions
                questions.push(currentQuestion);
                // Reset the current question to null
                currentQuestion = null;
            }
        } else if (!currentQuestion) {
            // If there is no current question, this line is the question title
            currentQuestion = { title: line, answers: [] };
        } else {
            // Determine if the answer is correct by checking if it starts with '*'
            const isCorrect = line.startsWith('*');
            // Remove the '*' from the beginning of correct answers
            const answer = isCorrect ? line.substring(1) : line;
            // Add the answer to the current question's answers array
            currentQuestion.answers.push({ text: answer, correct: isCorrect });
        }
    });

    // Add the last question if there is one
    if (currentQuestion) {
        questions.push(currentQuestion);
    }

    // Return the array of question objects
    return questions;
}

// Function to display desktop notifications
function Notify(message) {
    // Check if the browser supports notifications
    if (!("Notification" in window)) {
        console.error("This browser does not support desktop notifications");
    } else if (Notification.permission === "granted") {
        // If permission is granted, show the notification
        new Notification(message);
    } else if (Notification.permission === "denied") {
        // If notifications are denied by the user, log it to the console
        console.log("Notifications are denied by the user.");
    } else {
        // Request permission to show notifications
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                // If permission is granted, show the notification
                new Notification(message);
            } else if (permission === "denied") {
                // If permission is denied by the user, log it to the console
                console.log("User denied notifications.");
            }
        });
    }
}

// Function to start the quiz
function startQuiz(container, questions) {
    let currentQuestionIndex = 0; // Index of the current question
    let correctAnswers = 0; // Count of correct answers

    // Function to show the current question
    function showQuestion() {
        container.innerHTML = ''; // Clear the container
        const question = questions[currentQuestionIndex]; // Get the current question
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        const titleElement = document.createElement('h2');
        titleElement.textContent = question.title; // Set the question title
        questionElement.appendChild(titleElement);

        // Loop through each answer for the current question
        question.answers.forEach(answer => {
            const answerElement = document.createElement('button');
            answerElement.textContent = answer.text; // Set the answer text
            answerElement.addEventListener('click', () => {
                // If the answer is correct
                if (answer.correct) {
                    Notify('Correct!'); // Show a correct notification
                    alert('Correct'); // Show an alert
                    correctAnswers++; // Increment the correct answers count
                } else {
                    Notify('Wrong!'); // Show a wrong notification
                    alert('Wrong!'); // Show an alert
                }
                currentQuestionIndex++; // Move to the next question
                if (currentQuestionIndex < questions.length) {
                    showQuestion(); // Show the next question
                } else {
                    showResults(); // Show the quiz results
                }
            });
            questionElement.appendChild(answerElement);
        });

        container.appendChild(questionElement); // Add the question element to the container
    }

    // Function to show the quiz results
    function showResults() {
        container.innerHTML = ''; // Clear the container
        const resultElement = document.createElement('div');
        resultElement.classList.add('result');
        resultElement.textContent = `You got ${correctAnswers} out of ${questions.length} correct!`; // Display the results
        container.appendChild(resultElement); // Add the result element to the container
    }

    // Start by showing the first question
    showQuestion();
}
