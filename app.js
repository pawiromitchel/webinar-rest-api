const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());

app.get('/hello', function (req, res) {
    // database

    res.json({ message: "Hi" });
});

module.exports = app;
