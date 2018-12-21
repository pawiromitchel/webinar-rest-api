const mysql = require('mysql');
const databaseConfig = require('../config/config');
const connection = mysql.createConnection(databaseConfig[process.env.ENVIRONMENT]);

function create(req, res) {
    connection.query('INSERT INTO users (first_name, last_name) VALUES(?,?)', [
        req.body.first_name,
        req.body.last_name
    ], function (error, results, fields) {
        if (error) {
            res.json({ message: error });
        }

        res.json({ message: `Inserted ID: ${results.insertId}` });
    });
}

function selectAll(req, res) {
    connection.query('SELECT * FROM users', function (error, results, fields) {
        if (error) {
            res.json({ message: error });
        }

        res.json(results);
    })
}

function selectOne(req, res) {
    connection.query('SELECT * FROM users WHERE user_id = ?', [
        req.params.user_id
    ], function (error, results, fields) {
        if (error) {
            res.json({ message: error });
        }

        res.json(results);
    })
}

function update(req, res) {
    connection.query('UPDATE users SET first_name = ?, last_name = ? WHERE user_id = ?', [
        req.body.first_name,
        req.body.last_name,
        req.body.user_id
    ], function (error, results, fields) {
        if (error) {
            res.json({ message: error });
        }

        res.json(results);
    });
}

function deleteOne(req, res) {
    connection.query('DELETE FROM users WHERE user_id = ?', [
        req.body.user_id
    ], function (error, results, fields) {
        if (error) {
            res.json({ message: error });
        }

        res.json(results);
    });
}

module.exports = { create, selectAll, update, deleteOne, selectOne };
