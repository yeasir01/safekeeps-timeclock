const express = require('express');
const { sequelize } = require('./models/index.js');

const PORT = process.env.PORT;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/v1', require('./routes/api/v1/user-route.js'));
app.use('/', require('./routes/index.js'));

(async () => {
    try {
        await sequelize.sync({ force: true });
        app.listen(PORT, () => console.log(`API Server listening on ${PORT}`));
    } catch (err) {
        console.log(err);
    }
})()