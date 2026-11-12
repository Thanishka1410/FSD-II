
const express = require('express');
const app = express();

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Display HTML form
app.get('/', (req, res) => {
    res.send(`
        <h2>Student Form</h2>
        <form action="/submit" method="POST">
            Name: <input type="text" name="name"><br><br>
            Age: <input type="number" name="age"><br><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

// Receive form data
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    res.send(
        'Name: ' + name + '<br>Age: ' + age
    );
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
