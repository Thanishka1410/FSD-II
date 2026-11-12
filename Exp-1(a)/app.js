
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to ExpressJS');
});

app.get('/user/:name', (req, res) => {
    res.send('User Name: ' + req.params.name);
});

app.get('/search', (req, res) => {
    res.send('Search: ' + req.query.keyword);
});

app.get('/url', (req, res) => {
    const url = req.protocol + '://' +
        req.get('host') + '/user/John';
    res.send('Generated URL: ' + url);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
