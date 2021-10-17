'use strict';

const express = require('express');
const {sequelize} = require('./models/index.js');

const PORT = process.env.PORT;
const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use('/', require('./routes/health-check.js'));
app.use('/api/v1', require('./routes/v1/user-route.js'));

app.use('*', require('./routes/no-resource.js'));

let server = null;

(async () => {
    try {
        await sequelize.sync({
            force: true
        });
        server = app.listen(PORT, () => console.log(`API Server listening on ${PORT}`));
    } catch (err) {
        console.info(err);
    }
})();

async function gracefulShutDown() {
    try {
        await server.close();
        process.exit(0);
    } catch (_) {
        process.exit(1);
    }
}

process.on('SIGINT', gracefulShutDown);