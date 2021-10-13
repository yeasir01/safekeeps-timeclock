const { sequelize } = require('../models/index.js');

module.exports = {
    database: async (_req, res) => {
        try {
            await sequelize.authenticate();
            res.status(200).json({success: true, message: 'Database ready to connect.'});
        } catch (err) {
            console.log(err);
            res.status(500).json({success: false, message: 'Unable to connect to DB.'});
        }
    },
    server: (_req, res) => {
        res.status(200).json({success: true, message: 'Server running.'});
    }
};