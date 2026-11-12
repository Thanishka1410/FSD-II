
const express = require('express');
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: 'Ravi' },
    { id: 2, name: 'Sita' }
];

// POST - Accept data
app.post('/students', (req, res) => {
    students.push(req.body);
    res.send('Student added successfully');
});

// GET - Retrieve data
app.get('/students', (req, res) => {
    res.json(students);
});

// DELETE - Delete specified student
app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);

    students = students.filter(s => s.id !== id);

    res.send('Student deleted successfully');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
