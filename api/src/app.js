'use strict';

const express = require('express');
const helmet = require('helmet');
const passport = require('passport');
const session = require('express-session');
const dbConnection = require('./config/db-connection');

const PORT = process.env.PORT || 5000;
const app = express();

//Import passport strategies
require('./config/passport')(passport);

//Grab Environment Variables.
const NODE_ENV = process.env.NODE_ENV || 'development';

//Setup Options
const SESSION_OPT = {
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
};

//Initialize Middleware's
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session(SESSION_OPT));
app.use(passport.initialize());
app.use(passport.authenticate('session'));

// Health check route
app.get('/api/healthy', (req, res) => {
    res.status(200).send({status: 'OK'});
});

//Api Routes
app.use('/api/v1', require('./routes/v1/account-route.js'));
//app.use('/api/v1', require('./routes/v1/staff-route.js'));

//404
app.all('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Invalid route.',
        url: req.originalUrl
    });
});

//Error Handler
app.use(require('./middleware/error-handler'));

//Start server
(async function(){
    try {
        await dbConnection();
        app.listen(PORT);
        console.log(`✔️  API Server running in ${NODE_ENV} mode & Listening on ${PORT}.`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();