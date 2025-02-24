# Quiz Web App

This project is a simple quiz application that can be run in a web browser. It allows users to participate in quizzes similar to Kahoot, using a straightforward text file to define the quiz questions and answers.

## Project Structure

```
quiz-web-app
├── src
│   ├── index.html       # Main HTML document for the quiz application
│   ├── styles.css       # CSS file for styling the quiz application
│   └── script.js        # JavaScript file for quiz logic and functionality
├── quiz
│   └── quiz.txt         # Text file containing quiz questions and answers
└── README.md            # Documentation for the project
```

## How to Set Up

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd quiz-web-app
   ```

2. **Open the Project**
   Open the `index.html` file in your preferred web browser.

## Quiz Format

The quiz questions and answers are defined in the `quiz/quiz.txt` file. The format is as follows:

- Each question starts with a title on the first line.
- Possible answers follow, with the correct answer marked by an asterisk (*) at the beginning.
- An empty line indicates the end of a question.

### Example of quiz.txt

```
What is the capital of France?
*Paris
London
Berlin

What is 2 + 2?
*4
3
5
```

## Features

- Simple and user-friendly interface.
- Dynamic loading of quiz questions from a text file.
- Interactive quiz experience with real-time feedback.

## Contributing

Feel free to submit issues or pull requests if you would like to contribute to the project.