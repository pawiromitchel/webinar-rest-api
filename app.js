const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: true }));

// Require the users route
require('./server/routes/usersRoute').usersRoute(app);

// When a route doesn't exist, show the requester this message
app.get('*', function (req, res) {
    res.json({ message: "Welcome to my API" });
});

module.exports = app;
