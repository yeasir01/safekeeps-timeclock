'use strict';

const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const app = express();

//Grab Environment Variables.
const {
    MONGO_URI,
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_DB,
    NODE_ENV,
} = process.env;

//Setup Database Options
const MONGO_OPT = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    dbName: MONGO_DB,
    auth: {
        username: MONGO_USER,
        password: MONGO_PASSWORD,
    },
};

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//DB Connection
mongoose.connect(MONGO_URI, MONGO_OPT, (err) => console.log(err));

// Health check route
app.get('/healthy', (req, res) => {
    res.status(200).send('OK').end();
});

//Api Routes
app.use('/api/v1', require('./routes/v1/user-route.js'));

//404
app.all('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'No resource found',
        url: req.originalUrl
    }).end();
});

//Error Handler
app.use(require('./middleware/error-handler'));

//Start server
app.listen(PORT, () => console.log(`API Server listening on ${PORT} in ${NODE_ENV} mode.`));