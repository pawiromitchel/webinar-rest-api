const usersController = require('../controllers/usersController');

function usersRoute(app) {
    app.post('/users', usersController.create);
    app.get('/users', usersController.selectAll);
    app.get('/users/:user_id', usersController.selectOne);
    app.patch('/users', usersController.update);
    app.delete('/users', usersController.deleteOne);
}

module.exports = { usersRoute };
