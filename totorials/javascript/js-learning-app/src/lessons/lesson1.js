function lesson1() {
    const lessonContent = `
        <h2>Lesson 1: Introduction to JavaScript</h2>
        <p>In this lesson, we will cover the basics of JavaScript, including variables and data types.</p>
        
        <h3>Variables</h3>
        <p>Variables are used to store data values. In JavaScript, you can declare a variable using <code>let</code>, <code>const</code>, or <code>var</code>.</p>
        
        <h4>Example:</h4>
        <pre>
            let name = 'John'; // A string
            const age = 30;    // A number
            var isStudent = true; // A boolean
        </pre>
        
        <h3>Data Types</h3>
        <p>JavaScript has several data types, including:</p>
        <ul>
            <li>String</li>
            <li>Number</li>
            <li>Boolean</li>
            <li>Object</li>
            <li>Array</li>
        </ul>
        
        <h4>Interactive Example:</h4>
        <p>Try changing the values of the variables below:</p>
        <pre>
            let greeting = 'Hello, World!';
            console.log(greeting);
        </pre>
    `;

    document.getElementById('lesson').innerHTML = lessonContent;
}

export default lesson1;