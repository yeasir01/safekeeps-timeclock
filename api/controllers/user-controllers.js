const { User } = require('../models');

module.exports = {
    create: async (req, res) => {
        try {
            const user = await User.create(req.body);
            res.json({user: user, code: 201});
        } catch (error) {
            res.json({message: "An error occured", code: 500});
        }
    },
    update: (_req, res) => {
        
    },
    delete: (_req, res) => {
        
    },
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await User.findByPk(id);
            res.json({user: user, code: 200});
        } catch (error) {
            res.json({message: "An error occured", code: 500});
        }
    },
}