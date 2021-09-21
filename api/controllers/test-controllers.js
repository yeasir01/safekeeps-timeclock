const { sequelize } = require('../models/index.js');

module.exports = {
    database: async (_req, res) => {
        try {
            await sequelize.authenticate();
            res.status(200).json({status: 'OK', message: 'Database ready to connect.'});
        } catch (err) {
            console.log(err);
            res.status(500).json({message: 'Unable to connect to DB.'});
        }
    },
    server: (_req, res) => {
        res.status(200).json({status: 'OK', message: 'Server running.'});
    }
};