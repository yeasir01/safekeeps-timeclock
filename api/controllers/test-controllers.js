const db = require('../models/index.js');

module.exports = {
    database: async (_req, res) => {
        try {
            await db.sequelize.authunticate();
            res.json({status: "OK", code: 200});
        } catch (error) {
            res.json({message: "Unable to connect to DB.", code: 500});
        }
    },
    server: (_req, res) => {
        res.json({status: "OK", code: 200});
    },
    noRoute: (_req, res) => {
        res.json({message: "No resource found", code: 404})
    }
}