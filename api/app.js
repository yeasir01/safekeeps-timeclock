const express = require('express');
const { sequelize } = require('./models/index.js');

const PORT = process.env.PORT;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', require('./routes/health-check.js'));
app.use('/api/v1', require('./routes/api/v1/user-route.js'));

app.use('*', require('./routes/not-found.js'));

// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).json({success: false, message: 'Server issue, please try again later!'});
});

(async () => {
    try {
        await sequelize.sync({ force: true });
        app.listen(PORT, () => console.log(`API Server listening on ${PORT}`));
    } catch (err) {
        console.log(err);
    }
})();