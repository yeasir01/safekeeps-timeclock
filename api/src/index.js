'use strict';

const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const app = express();

const MONGO_URI = process.env.MONGO_URI;

const MONOGO_OPT = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    dbName: 'safeKeeps',
};

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//DB Connection
mongoose.connect(MONGO_URI, MONOGO_OPT, (err) => console.log(err));

// Health check route
app.get('/healthy', (req, res) => {
    res.status(200).send('OK').end();
});

//Api Routes
app.use('/api/v1', require('./routes/v1/user-route.js'));

//404
app.get('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'No resource found',
        url: req.originalUrl
    }).end();
});

//Start server
app.listen(PORT, () => console.log(`API Server listening on ${PORT}`));