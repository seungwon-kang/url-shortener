
var path = require('path');
var expressErrorHandler = require('express-error-handler');

var config = {};

// the web server port
config.PORT = 8000;

// static files directories
config.STATIC_FILES_DIRECTORIES = [
    path.join(__dirname, 'static'),
];

// view files directory
config.VIEW_FILES_DIRECTORY = path.join(__dirname, 'views');

// error handler
config.ERROR_HANDLER = expressErrorHandler({
    static: {
        '404': path.join(__dirname, 'static', '404.html')
    }
});

// database information
config.DATABASE_URL = 'mongodb://localhost:27017/url_shortener';
config.DATABASE_SCHEMAS = [
    { file: './schemas/user-schema', collection: 'user', schemaName: 'userSchema', modelName: 'userModel' },
];

// router information
config.ROUTERS = [];

module.exports = config;