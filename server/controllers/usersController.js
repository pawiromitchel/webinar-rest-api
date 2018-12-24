const databaseConfig = require('../config/config');

const Sequelize = require('sequelize');
const connection = new Sequelize(databaseConfig[process.env.ENVIRONMENT || 'development']);

const users = connection.define('users', {
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    created_at: Sequelize.DATE,
}, {
        freezeTableName: true
    });

function create(req, res) {
    users.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
    }).then(users => res.json(users)).catch(error => res.json({ message: error }));
}

function selectAll(req, res) {
    users.findAll().then(users => res.json(users)).catch(error => res.json({ message: error }));
}

function selectOne(req, res) {
    users.findOne({
        where: {
            user_id: req.params.user_id
        }
    }).then(users => res.json(users)).catch(error => res.json({ message: error }));
}

function update(req, res) {
    users.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
    }, {
            where: {
                user_id: req.body.user_id
            }
        }
    ).then(users => res.json(users)).catch(error => res.json({ message: error }));
}

function deleteOne(req, res) {
    users.destroy({
        where: {
            user_id: req.body.user_id
        }
    }).then(users => res.json(users)).catch(error => res.json({ message: error }));
}

module.exports = { create, selectAll, update, deleteOne, selectOne };
