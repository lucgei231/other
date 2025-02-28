function lesson2() {
    const lessonContent = `
        <h2>Lesson 2: Control Structures in JavaScript</h2>
        <p>In this lesson, we will learn about control structures, including conditionals and loops.</p>
        
        <h3>Conditionals</h3>
        <p>Conditionals allow us to execute different code based on certain conditions. The most common conditional statements are <code>if</code>, <code>else if</code>, and <code>else</code>.</p>
        
        <pre><code>
        let age = 18;
        if (age < 18) {
            console.log("You are a minor.");
        } else {
            console.log("You are an adult.");
        }
        </code></pre>
        
        <h3>Loops</h3>
        <p>Loops allow us to execute a block of code multiple times. The most common types of loops are <code>for</code> loops and <code>while</code> loops.</p>
        
        <pre><code>
        for (let i = 0; i < 5; i++) {
            console.log(i);
        }
        </code></pre>
        
        <h3>Try It Out!</h3>
        <p>Modify the code snippets above and see how the output changes. You can also try creating your own conditional statements and loops!</p>
    `;

    document.getElementById('lesson').innerHTML = lessonContent;
}

export default lesson2;