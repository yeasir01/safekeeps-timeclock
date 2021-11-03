'use strict';

const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');

const PORT = process.env.PORT || 5000;
const app = express();

//Grab Environment Variables.
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/safeKeeps';
const NODE_ENV = process.env.NODE_ENV || 'development';

//Setup Database Options
const MONGO_OPT = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
};

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());

//DB Connection
mongoose.connect(MONGO_URI, MONGO_OPT, (err) => err && console.error(err));

// Health check route
app.get('/api/healthy', (req, res) => {
    res.status(200).send({status: 'OK'});
});

//Api Routes
app.use('/api/v1', require('./routes/v1/user-route.js'));
app.use('/api/v1', require('./routes/v1/employee-route.js'));

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
app.listen(PORT, () => console.log(`API Server running in ${NODE_ENV} mode, listening on ${PORT}.`));