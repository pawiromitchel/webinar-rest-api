const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rest-api'
});

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());

/**
 * CREATE Operation
 */
app.post('/users', function (req, res) {

    console.log(req.body);

    connection.query('INSERT INTO users (first_name, last_name) VALUES(?,?)', ['John', 'Doe'], function (error, results, fields) {
        if (error) {
            res.json({ message: error });
        }

        res.json({ message: `Inserted ID: ${results.insertId}`});
    });
});

/**
 * READ Operation
 */
app.get('/users', function (req, res) {
    connection.query('SELECT * FROM users', function (error, results, fields) {
        if (error) {
            res.json({ message: error });
        }

        res.json(results);
    })
});

app.get('/hello', function (req, res) {
    // database

    res.json({ message: "Hi" });
});

// When a route doesn't exist, show the requester this message
app.get('*', function (req, res) {
    res.json({ message: "Welcome to my API" });
});

module.exports = app;
