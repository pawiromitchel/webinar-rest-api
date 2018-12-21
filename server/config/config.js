const databaseConfig = {
    development: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'rest-api'
    },
    production: {
        host: 'localhost-prod',
        user: 'root',
        password: '',
        database: 'rest-api'
    }
};

module.exports = databaseConfig;
