const databaseConfig = {
    development: {
        host: 'localhost',
        username : 'root',
        password: '',
        database: 'rest-api',
        dialect: 'mysql',
        define: {
            timestamps: false
        }
    },
    production: {
        host: 'localhost-prod',
        username: 'root',
        password: '',
        database: 'rest-api',
        dialect: 'mysql'
    }
};

module.exports = databaseConfig;
