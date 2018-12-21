const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const usersController = require('./server/controllers/usersController');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());

app.post('/users', usersController.create);
app.get('/users', usersController.selectAll);
app.patch('/users', usersController.update);
app.delete('/users', usersController.deleteOne);

// When a route doesn't exist, show the requester this message
app.get('*', function (req, res) {
    res.json({ message: "Welcome to my API" });
});

module.exports = app;
