const _findIndex = require('lodash/findIndex');
const _remove = require('lodash/remove');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let ideas = [];
app.get('/ideas', (request, response) => response.json(ideas));

app.get('/ideas/new', (request, response) => {
    const id = (+ new Date()) + '';
    const idea = {id, created_date: new Date()};

    ideas.push(idea);
    response.json(idea);
});

app.post('/idea/update', (request, response) => {
    const id = request.body.id;
    const title = request.body.title;
    const body = request.body.body;
    const index = _findIndex(ideas, i => {
        return i.id === id;
    });

    if (index > -1) {
        ideas[index] = { ...ideas[index], title, body };
        response.status(200).send();
    } else {
        response.status(404).send();
    }
});

app.post('/idea/delete', (request, response) => {
    const id = request.body.id;
    const removed = _remove(ideas, item => item.id === id);
    if (removed && removed.id === id) {
        response.status(200);
    } else {
        response.status(404);
    }
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});